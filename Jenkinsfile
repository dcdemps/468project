pipeline {
    agent none 
    environment {
        registry = "ddemps14"
        docker_user = "ddemps14"
        docker_app = "468project"
        GOCACHE = "/tmp"
    }
    stages {
       /* stage('Build') {
            agent {
                kubernetes {
                    inheritFrom 'agent-template'
                }
            }
            steps {

            }     
        }
        */
        stage('Publish') {
            agent {
                kubernetes {
                    inheritFrom 'agent-template'
                }
            }
            steps{
                container('docker-compose') {
                    sh 'echo $DOCKER_TOKEN | docker login --username $DOCKER_USER --password-stdin'
                    // sh 'docker compose build -t $DOCKER_REGISTRY:$BUILD_NUMBER .'
                    sh 'pwd'
                    sh 'ls -l'
                    
                    sh 'docker-compose -v'
                    sh 'docker-compose build ./'
                    // image name needs to be set in the docker compose file
                    // https://stackoverflow.com/questions/53416685/docker-compose-tagging-and-pushing
                    // sh 'docker compose push $DOCKER_REGISTRY:$BUILD_NUMBER'
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
