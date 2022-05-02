pipeline {
    agent none 
    environment {
        registry = "ddemps14"
        docker_user = "ddemps14"
        docker_app = "468project"
        GOCACHE = "/tmp"
        docker_token = "d0da111d-f632-46cf-9600-353f4ec7cff6"
    }
    stages {
        // stage('Build') {
        //     agent {
        //         kubernetes {
        //             inheritFrom 'agent-template'
        //         }
        //     }
        //     steps {
        //     }     
        // }
        stage('Build') {
            agent {
                kubernetes {
                    inheritFrom 'agent-template'
                }
            }
            steps{
                container('docker-compose') {
                    echo 'Building docker images'
                    echo '$DOCKER_TOKEN | docker login --username $DOCKER_USER --password-stdin'
                    sh 'docker-compose build'

                    echo 'Uploading docker images'
                    // TODO: add start up file that initiates the local repo
                    sh 'docker-compose push'
                }
            }
        }
        stage ('Deploy') {
            agent {
                node {
                    label 'deploy'
                }
            }
            steps {
                sshagent(credentials: ['cloudlab2']) {
                    sh 'scp -r -v -o StrictHostKeyChecking=no *.yaml ddemps14@128.105.146.169:~/'
                    sh 'ssh -o StrictHostKeyChecking=no ddemps14@128.105.146.169 kubectl apply -f /users/ddemps14/rambank.yaml -n jenkins'
                    sh 'ssh -o StrictHostKeyChecking=no ddemps14@128.105.146.169 kubectl apply -f /users/ddemps14/rambank-service.yaml -n jenkins' 
                    sh 'ssh -o StrictHostKeyChecking=no ddemps14@128.105.146.169 kubectl apply -f /users/ddemps14/rambank-persistentvolumeclaim.yaml -n jenkins'                                        
                }
            }
        }
    }
}
