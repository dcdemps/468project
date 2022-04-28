pipeline {
    agent none 
    environment {
        docker_token = "f6827529-0bc2-4be7-8052-3b4957c42193"
        registry = "ddemps14/468project"
        docker_user = "ddemps14@"
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
                //container('golang') {
                    // Create our project directory.
                    sh 'cd ${GOPATH}/src'
                    sh 'mkdir -p ${GOPATH}/src/hello-world'
                    // Copy all files in our Jenkins workspace to our project directory.                
                    sh 'cp -r ${WORKSPACE}/* ${GOPATH}/src/hello-world'
                    //install docker?
                    sh 'curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose'
                    //give docker permissions
                    sh 'chmod +x /usr/local/bin/docker-compose'
                    // Build the app.
                    sh 'docker-compose --version' 
                    sh 'docker-compose up --detach' 
                //}
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
                container('docker') {
                    sh 'echo $DOCKER_TOKEN | docker login --username $DOCKER_USER --password-stdin'
                    // sh 'docker compose build -t $DOCKER_REGISTRY:$BUILD_NUMBER .'
                    sh 'docker-compose build .'
                    // image name needs to be set in the docker compose file
                    // https://stackoverflow.com/questions/53416685/docker-compose-tagging-and-pushing
                    //sh 'docker compose push $DOCKER_REGISTRY:$BUILD_NUMBER'
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
                    sh 'scp -r -v -o StrictHostKeyChecking=no *.yml ddemps14@128.105.146.155:~/'
                    sh 'ssh -o StrictHostKeyChecking=no ddemps14@128.105.146.155 kubectl apply -f /users/ddemps14/deployment.yml -n jenkins'
                    sh 'ssh -o StrictHostKeyChecking=no ddemps14@128.105.146.155 kubectl apply -f /users/ddemps14/service.yml -n jenkins'                                        
                }
            }
        }
    }
}
