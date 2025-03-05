pipeline{

    agent{
        docker{
            image "cypress/browsers"
            args "--entrypoint=''"
        }
    }
    parameters {


        choice(name: 'CHOICE', choices: ['ajout', 'affichage', 'chekout'], description: 'tags')

    }
    stages{
        stage('Installation node_modules'){
            steps{
                sh 'npm ci'
            }
        }
        stage('run cypress'){
            steps{
                sh 'npx cypress run --env grepTags=@${params.CHOICE}'
            }
        }
    }
    post {
    always {
        junit "results/**/*.xml"
    }
}
}