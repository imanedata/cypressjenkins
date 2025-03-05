pipeline{

    agent{
        docker{
            image "cypress/browsers"
            args "--entrypoint=''"
        }
    }
    parameters {
        string(name: 'TEST_CASE', description: 'tags')
        string(name: 'TAGS', description: 'tags')

        

    }
    stages{
        stage('Installation node_modules'){
            steps{
                sh 'npm ci'
            }
        }
        stage('run cypress'){
            script{
                    if(params.TEST_CASE != null){
                    sh "npx cypress run --env grepTags=@${params.TEST_CASE}"
                    }else{
                        sh "npx cypress run --env grepTags=@${params.TAGS}"
                  }
            }
        }
    }
    post {
    always {
        junit "results/**/*.xml"
    }
}
}