pipeline {
    agent any
    environment {
        // Path to your kubeconfig on Jenkins server
        KUBECONFIG = '/var/lib/jenkins/kubeconfig'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/karnank25/devopsdemo.git', 
                    credentialsId: 'github-creds'  // replace with your GitHub credentials ID
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-app:latest .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                // Use Jenkins credentials, do NOT hardcode password/token
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-creds', 
                    usernameVariable: 'DOCKER_USER', 
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                    sh 'docker tag my-app:latest $DOCKER_USER/my-app:latest'
                    sh 'docker push $DOCKER_USER/my-app:latest'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}

