# Hackgrid

An advanced and customizable **Learning Management System (LMS)** built using modern web technologies. This platform includes key features for students, teachers, and course creators, supporting course browsing, creation, management, and secure payment processing.

![1738682717816](image/README/1738682717816.jpg)

### Key Features

* **Browse & Filter Courses:** Discover available courses based on categories and other filters.
* **Purchase Courses:** Integrated payment gateway using **Razorpay** for secure transactions.
* **Course Progress Tracking:** Mark chapters as completed or uncompleted and view your overall progress.
* **Student Dashboard:** View purchased courses and track learning milestones.
* **Teacher Mode:** Tools to create, manage, and monitor courses.
* **Course Creation Tools:** Create courses, add chapters, and manage course content seamlessly.
* **Drag-and-Drop Chapter Reordering:** Easily reorder chapter positions.
* **Rich Media Support:**
  * Thumbnails, attachments, and videos uploaded using **UploadThing**
  * Video processing using **Mux** with HLS video streaming player
* **Rich Text Chapter Editor:** Fully-featured text editor for chapter descriptions.
* **Authentication:** User management handled by **Clerk** for secure access.
* **Data Management:** ORM via  **Prisma** , backed by **Postgresql** using **Xata**

### **Tech Stack**

* **Frontend:** React, Next.js 13 (App Router)
* **Backend:** Next.js API Routes
* **ORM:** Prisma
* **Database:** Xata (PostgreSQL)
* **Payment:** Razorpay
* **File Uploads:** UploadThing & Mux
* **Authentication:** Clerk
* **Styling:** Tailwind CSS

## **Project Setup Instructions**

#### **Prerequisites**

Ensure the following are installed:

* Node.js (version 18.x.x or later)

#### **Cloning the Repository**

```
git clone https://github.com/Sarthak027/hackgrid.git
```

#### **Install Dependencies**

```
npm i
```

#### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=


NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/

DATABASE_URL=

UPLOADTHING_TOKEN=
UPLOADTHING_SECRET=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
NEXT_PUBLIC_TEACHER_ID = 

RAZORPAY_LIVE_KEY_ID=
RAZORPAY_LIVE_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=
```

#### Setup Prisma

Add PostgreSQL Database (I used Xata ([Xata.io](https://xata.io/)))

```shell
npx prisma generate
npx prisma db push

```

#### Start the app

```
npm run dev
```

The app will be available at `http://localhost:3000`

### Directory Structure:

```
└── Hackgird/
    ├── README.md
    ├── components.json
    ├── middleware.ts
    ├── next.config.js
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── .eslintrc.json
    ├── actions/
    │   ├── get-analytics.ts
    │   ├── get-chapter.ts
    │   ├── get-courses.ts
    │   ├── get-dashboard-courses.ts
    │   └── get-progress.ts
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── (auth)/
    │   │   ├── layout.tsx
    │   │   └── (routes)/
    │   │       ├── sign-in/
    │   │       │   └── [[...sign-in]]/
    │   │       │       └── page.tsx
    │   │       └── sign-up/
    │   │           └── [[...sign-up]]/
    │   │               └── page.tsx
    │   ├── (course)/
    │   │   └── courses/
    │   │       └── [courseId]/
    │   │           ├── layout.tsx
    │   │           ├── page.tsx
    │   │           ├── _components/
    │   │           │   ├── course-mobile-sidebar.tsx
    │   │           │   ├── course-navbar.tsx
    │   │           │   ├── course-sidebar-item.tsx
    │   │           │   └── course-sidebar.tsx
    │   │           └── chapters/
    │   │               └── [chapterId]/
    │   │                   ├── page.tsx
    │   │                   └── _components/
    │   │                       ├── course-enroll-button.tsx
    │   │                       ├── course-progress-button.tsx
    │   │                       └── video-player.tsx
    │   ├── (dashboard)/
    │   │   ├── layout.tsx
    │   │   ├── (routes)/
    │   │   │   ├── (root)/
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── _components/
    │   │   │   │       └── info-card.tsx
    │   │   │   ├── search/
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── _components/
    │   │   │   │       ├── categories.tsx
    │   │   │   │       └── category-item.tsx
    │   │   │   └── teacher/
    │   │   │       ├── layout.tsx
    │   │   │       ├── analytics/
    │   │   │       │   ├── page.tsx
    │   │   │       │   └── _components/
    │   │   │       │       ├── chart.tsx
    │   │   │       │       └── data-card.tsx
    │   │   │       ├── courses/
    │   │   │       │   ├── page.tsx
    │   │   │       │   ├── [courseId]/
    │   │   │       │   │   ├── page.tsx
    │   │   │       │   │   ├── _components/
    │   │   │       │   │   │   ├── actions.tsx
    │   │   │       │   │   │   ├── attachment-form.tsx
    │   │   │       │   │   │   ├── category-form.tsx
    │   │   │       │   │   │   ├── chapters-form.tsx
    │   │   │       │   │   │   ├── chapters-list.tsx
    │   │   │       │   │   │   ├── description-form.tsx
    │   │   │       │   │   │   ├── image-form.tsx
    │   │   │       │   │   │   ├── price-form.tsx
    │   │   │       │   │   │   └── title-form.tsx
    │   │   │       │   │   └── chapters/
    │   │   │       │   │       └── [chapterId]/
    │   │   │       │   │           ├── page.tsx
    │   │   │       │   │           └── _components/
    │   │   │       │   │               ├── chapter-access-form.tsx
    │   │   │       │   │               ├── chapter-actions.tsx
    │   │   │       │   │               ├── chapter-description-form.tsx
    │   │   │       │   │               ├── chapter-title-form.tsx
    │   │   │       │   │               └── chapter-video-form.tsx
    │   │   │       │   └── _components/
    │   │   │       │       ├── columns.tsx
    │   │   │       │       └── data-table.tsx
    │   │   │       └── create/
    │   │   │           └── page.tsx
    │   │   └── _components/
    │   │       ├── logo.tsx
    │   │       ├── mobile-sidebar.tsx
    │   │       ├── navbar.tsx
    │   │       ├── sidebar-item.tsx
    │   │       ├── sidebar-routes.tsx
    │   │       └── sidebar.tsx
    │   └── api/
    │       ├── courses/
    │       │   ├── route.ts
    │       │   └── [courseId]/
    │       │       ├── route.ts
    │       │       ├── attachments/
    │       │       │   ├── route.ts
    │       │       │   └── [attachmentId]/
    │       │       │       └── route.ts
    │       │       ├── chapters/
    │       │       │   ├── route.ts
    │       │       │   ├── [chapterId]/
    │       │       │   │   ├── route.ts
    │       │       │   │   ├── progress/
    │       │       │   │   │   └── route.ts
    │       │       │   │   ├── publish/
    │       │       │   │   │   └── route.ts
    │       │       │   │   └── unpublish/
    │       │       │   │       └── route.ts
    │       │       │   └── reorder/
    │       │       │       └── route.ts
    │       │       ├── checkout/
    │       │       │   └── route.ts
    │       │       ├── publish/
    │       │       │   └── route.ts
    │       │       └── unpublish/
    │       │           └── route.ts
    │       ├── uploadthing/
    │       │   ├── core.ts
    │       │   └── route.ts
    │       └── webhook/
    │           └── route.ts
    ├── components/
    │   ├── banner.tsx
    │   ├── course-card.tsx
    │   ├── course-progress.tsx
    │   ├── courses-list.tsx
    │   ├── editor.tsx
    │   ├── file-upload.tsx
    │   ├── icon-badge.tsx
    │   ├── navbar-routes.tsx
    │   ├── preview.tsx
    │   ├── search-input.tsx
    │   ├── modals/
    │   │   └── confirm-modal.tsx
    │   ├── providers/
    │   │   ├── confetti-provider.tsx
    │   │   └── toaster-provider.tsx
    │   └── ui/
    │       ├── alert-dialog.tsx
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── checkbox.tsx
    │       ├── combobox.tsx
    │       ├── command.tsx
    │       ├── dialog.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── table.tsx
    │       └── textarea.tsx
    ├── hooks/
    │   ├── use-confetti-store.ts
    │   └── use-debounce.ts
    ├── lib/
    │   ├── db.ts
    │   ├── format.ts
    │   ├── Razorpay.ts
    │   ├── teacher.ts
    │   ├── uploadthing.ts
    │   └── utils.ts
    ├── prisma/
    │   └── schema.prisma
    ├── public/
    └── scripts/
        └── seed.ts
```

#### Deployment Link :

[https://www.hackgrid.site/](https://www.hackgrid.site/)

## **🙌 Contribution Guidelines (GSSoC'25 Edition)**

We’re thrilled to welcome GSSoC 2025 participants to Hackgrid! 🚀
This project thrives on open-source collaboration, and we’re excited to have you contribute. Please follow the steps below to get started:

📌 Getting Started
1. Star ⭐ the Repository
Show your support by starring the repo!

2. Fork the Repository
Click on the Fork button to create your own copy of this repository.

3. Clone Your Fork
```
git clone https://github.com/<your-username>/hackgrid.git
cd hackgrid
```
4. Create a New Branch
```
git checkout -b your-branch-name
```
5. Setup Project Locally
Follow the steps mentioned in the Project Setup Instructions above to install dependencies and configure .env.

## **🧠 Contribution Ideas**

Here are a few areas where GSSoC contributors can help:

🔧 Bug Fixes: UI issues, logic errors, or misbehaving components

🧩 Feature Enhancements: Improving course creation flow, adding search/sort options

📱 Responsive Design Fixes: Making the UI look great across devices

✨ UI/UX Improvements: Animations, transitions, layout tweaks

📃 Documentation: Improve README, setup steps, or add code comments

🔒 Security Improvements: Suggestions around auth, secure file handling, etc.

💡 New Feature Proposals: Suggest something new that aligns with the LMS vision

## **✅ Contribution Checklist**

Before sending a pull request (PR):

 Your code is well-documented and follows project conventions.

 You've tested the feature locally ```npm run dev ```.

 You’ve linked the issue you're working on ```e.g., Fixes #12```.

 Your PR has a clear and concise description of what was added or changed.

 Screenshots are added for UI changes (in the PR).

## **🔁 Submitting a Pull Request**
1. Commit Your Changes

```
git add .
git commit -m "Added feature: drag-and-drop course reordering"
```
2. Push to Your Branch

```
git push origin your-branch-name
```

3. Create a Pull Request (PR)

Go to your forked repository on GitHub.

Click on ``` Compare & pull request```.

Add a descriptive title and summary.

Select main as the base branch of the original repo.

## **🗂️ Project Structure Overview**
If you're new to full-stack or Next.js 13 (App Router), you may want to explore:

```app/```: All the pages, layouts, and routing

```components/```: UI and logic components

```lib/```: Utility and service layer

```hooks/```: Custom React hooks

```prisma/```: Prisma schema and DB migrations

```public/```: Static assets

```scripts/seed.ts```: Sample DB seeding script

## **🤝 Code of Conduct**
Please be respectful to maintainers and fellow contributors. We're building a learning platform — let’s also make it a learning experience for all!

# **License**

This project is open-sourced under the MIT License.
