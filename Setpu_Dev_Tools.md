Use your Gmail account for the course. 

# 1. Setup GitHub and Git
Download git from https://git-scm.com/download/. Config it as described in https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup

Create an GitHub account in https://github.com/

Learn basic concepts from https://youtu.be/73I5dRucCds 

# 2. Install VisualStudio Code
https://code.visualstudio.com/docs

https://code.visualstudio.com/docs/getstarted/introvideos

The good news is that VS Code has built-in support for Git pull/commit/push. Try to create a GitHub repository, clone it, make some changes, commit changes and push changes. 

# 3. Install Node.js
https://nodejs.org/en, it's recommended using the latest current version for this course. 
Verify installation by `node --version`

For Mac or Linux users, install and use `nvm` from https://github.com/creationix/nvm to install node.js. 

# 4. Fork and Edit

## 4.1 Fork 
Fork the project https://github.com/csulbying/Sample_Start in your github account

## 4.2 Clone 
Clone the newly forked project to your local computer.

## 4.3 Edit
Use Visual Studio Code (or your favorite editor such as WebStorm) to edit the `{Project-Root}/website/index.html` to change `James Bond` to your firstname and your last name. The `{Project-Root}` means your local project root folder. It should be the `Sample_Start` folder in the folder that you clone the repository. 

## 4.4. Install Dependencies and Run Locally
In the `{Project-Root}` folder, run `npm install` to install dependencies. Run `npm start` to start the application. Then open your broser, check the output in `http://localhost:3377/`. 

# 5. Create Google Cloud Platform Account
Read GCP document https://cloud.google.com/docs/ to create your account. You need a Gmail account to use GCP services. 

For billing, you can either start a free trial with $300 budget or get the course coupon (check BeachBoard instruction)

You need a school email (@csulb.edu) to get the coupon. 

Please don't use your credit card to setup billing, the cost might be higher than you expect. 

Create a Google App Engine project named `web-hw-01` in your GCP console.  

# 6. Install Cloud SDK
Download Google Cloud SDK from https://cloud.google.com/sdk/. Install the SDK and learn its basic usage from https://cloud.google.com/sdk/docs/

For Mac, the setup and initialization instructions are documented in https://cloud.google.com/sdk/docs/quickstart-mac-os-x. There are also docs for Windows (https://cloud.google.com/sdk/docs/quickstart-windows). 

You may need to install tools such as Python and/or Ruby, Brew and etc. Please follow the instrcutions. When asked to config Google computer engine, type "n". Answer "Y" to everything else.

# 7. Deploy App
In your `{Project-Root}` folder, run `gcloud app deploy` to deploy the app to your GCP site. Select a `US-west` region for better response time. 

Run `gcloud app browse` to check the output. 

# 8. Resources
The above sample is similar to the sample described in GCP document
https://cloud.google.com/nodejs/getting-started/hello-world

The https://cloud.google.com/docs/ has general GCP documents 


