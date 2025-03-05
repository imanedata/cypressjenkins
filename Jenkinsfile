pipeline{
    agent {
        docker {
            image "cypress/browsers"
            args "--entrypoint='' "
        }

        
    }
    stages{
        stage("cypress version"){
            stapes{
                sh 'npm install'
                sh 'npx cypress open'
            }

        }
    }
    
}