pipeline {
    agent any
    environment {
        // Path to your kubeconfig on Jenkins server
        KUBECONFIG = '/var/lib/jenkins/.kube/config'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/karnank25/devopsdemo.git'
            }
        }
        stage('Build and Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    script {
                        def imageName = "${DOCKER_USER}/my-app:latest"
                        sh "docker build -t ${imageName} ."
                        sh "docker login -u $DOCKER_USER -p $DOCKER_PASS"
                        sh "docker push ${imageName}"
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                // Apply Deployment and Service
                sh 'kubectl apply -f deploy.yaml --validate=false'
                sh 'kubectl apply -f service.yaml --validate=false'
            }
        }
    }
}
