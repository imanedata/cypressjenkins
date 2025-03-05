pipeline{
    agent {
        docker {
            image "cypress/browsers"
            args "--entrypoint='' "
        }

        
    }
    stages{
        stage('npm install'){
            steps{
                sh 'npm install'
            
            }
        }
        stage('npm install'){
            steps{
                sh 'npx cypress run'
            
            }
        }
    }
    
}