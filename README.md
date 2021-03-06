[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7542535&assignment_repo_type=AssignmentRepo)
# React TypeScript Starter Repo

Hello! This repository has been pre-configured with eslint and gh-pages to automatically deploy your app when you push to the main branch.

You will, however, need to finish setting up the deployment.

### 1. Generate a personal access token

1. Click on your picture -> `settings` in the top right of Github.
2. Then, scroll to `Developer Settings` and click `Personal access tokens`
3. Generate a new token with `repo` access and no expiration date.
4. Make sure you copy the created token as you will not be able to see it after this.

### 2. Add a secret to the forked repo

Back in this repository, go to `settings` -> `secrets` -> `Actions` and click the `New repository secret` button in the topright.

Name the secret "GH_TOKEN" and paste in the token you copied in the previous step.

### 3. Personas

1.I am a Computer Science BA student in junior year. Main goal is to finish another 5 CISC301+ course. Barrier is to finish them and capstone in 2 years.

2.I am a Computer Science BS student in Sophemore year. And I have taken CISC108 and 181 in my Freshmen Year. My main goal is to accomplish 42 credits from the list of CISC core courses and CISC elective courses within three years. My barrier is to take the 14 CISC courses in the remaining 6 semesters so that I can finish them with less stress.

3.I am a Computer Science BA student in Freshmen year. My main goal is to graduate on time and organize CISC courses appropriately throughout my bachelor career. My barrier is to balance the CISC core courses and other required elective courses during each semester.


### 4.
![Page1 4](https://user-images.githubusercontent.com/55119395/161885482-d80ba724-48e2-4e12-b5d7-1db2973523fa.jpg)
![Page2](https://user-images.githubusercontent.com/55119395/163049189-a68640c4-b44a-4831-b560-1fc6e4b5ebda.jpg)
![Page3](https://user-images.githubusercontent.com/55119395/163049284-41345136-2cee-4367-9027-51c102703c56.jpg)

### 5.
Course{

course_id: number;

course_title: string;

course_credit: number;

course_description: string;

preReq: string;

taken: boolean;

}

Semester{

semester_id: number;

semester_title: string;

semester_year: string;

courseList: Course[];

}

Plan{ // Course interface is included in Plan

plan_id: number;

plan_title: string;

semester: Semester[];

publish: boolean;

}
