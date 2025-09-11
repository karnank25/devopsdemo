pipeline {
    agent any
    environment {
        // Path to your kubeconfig on Jenkins server
        KUBECONFIG = '/var/lib/jenkins/.kube/config''
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/karnank25/devopsdemo.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Use Docker Hub username for tagging
                    def imageName = "${DOCKER_USER}/my-app:latest"
                    sh "docker build -t ${imageName} ."
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub',
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
                // Use KUBECONFIG for authentication
                sh 'kubectl apply -f deployment.yaml --insecure-skip-tls-verify=true'
            }
        }
    }
}
