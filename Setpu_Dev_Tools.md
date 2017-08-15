Use your Gmail account for the course. 

# 1. Setup GitHub and Git
Create a GitHub account and setup Git. 
Learn basic concepts from https://youtu.be/73I5dRucCds 

# 2. Install VisualStudio Code
https://code.visualstudio.com/docs

https://code.visualstudio.com/docs/getstarted/introvideos

The good news is that VS Code has built-in support for Git pull/commit/push. Try to create a GitHub repository, clone it, make some changes, commit changes and push changes. 

# 3. Install Node.js
https://nodejs.org/en, it's recommended using the latest current version for this course. 

Verify installation by `node --version`

# 4. Fork and Edit
Fork the project https://github.com/csulbying/Sample_Start and clone to your local computer.

Edit the `{Project-Root}/website/index.html` to change `James Bond` to your firstname and your last name. The `{Project-Root}` means your local project root folder. It should be the `Sample_Start` folder in the folder that you clone the repository. 

In the `{Project-Root}` folder, run `npm install` to install dependencies. Run `npm start` to start the application. Then open your broser, check the output in `http://localhost:3377/`. 

# 5. Create Google Cloud Platform Account
Read GCP document https://cloud.google.com/docs/ to create your account. You need a Gmail account to use GCP services. 

For billing, you can either start a free trial with $300 budget or get the course coupon (check BeachBoard instruction)

You need a school email (@csulb.edu) to get the coupon. 

Please don't use your credit card to setup billing, the cost might be higher than you expect. 

Create a Google App Engine project named `web-app-01` in your GCP console.  

# 6. Install Cloud SDK
Download Google Cloud SDK from https://cloud.google.com/sdk/. Install the SDK and learn its basic usage from https://cloud.google.com/sdk/docs/

# 7. Deploy App
In your `{Project-Root}` folder, run `gcloud app deploy` to deploy the app to your GCP site. 

Run `gcloud app browse` to check the output. 

It's similar to the sample described in GCP document
https://cloud.google.com/nodejs/getting-started/hello-world
