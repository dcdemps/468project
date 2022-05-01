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
        container('docker-compose') {
            stage('Build') {
                agent {
                    kubernetes {
                        inheritFrom 'agent-template'
                    }
                }
                steps {
                    sh 'echo Building docker images'
                    sh 'echo $DOCKER_TOKEN | docker login --username $DOCKER_USER --password-stdin'
                    sh 'docker-compose build'
                }     
            }
            stage('Publish') {
                agent {
                    kubernetes {
                        inheritFrom 'agent-template'
                    }
                }
                steps{
                    sh 'echo uploading docker images'
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
                sshagent(credentials: ['cloudlab']) {
                    sh "sed -i 's/DOCKER_USER/${docker_user}/g' deployment.yml"
                    sh "sed -i 's/DOCKER_APP/${docker_app}/g' deployment.yml"
                    sh "sed -i 's/BUILD_NUMBER/${BUILD_NUMBER}/g' deployment.yml"
                    sh 'scp -r -v -o StrictHostKeyChecking=no *.yml ddemps14@128.105.146.169:~/'
                    sh 'ssh -o StrictHostKeyChecking=no ddemps14@128.105.146.169 kubectl apply -f /users/ddemps14/deployment.yml -n jenkins'
                    sh 'ssh -o StrictHostKeyChecking=no ddemps14@128.105.146.169 kubectl apply -f /users/ddemps14/service.yml -n jenkins'                                        
                }
            }
        }
    }
}
