export const en = {
  common: {
    buttons: {
      // Common actions
      save: 'Save',
      cancel: 'Cancel',
      close: 'Close',
      edit: 'Edit',
      delete: 'Delete',
      back: 'Back',
      next: 'Next',
      confirm: 'Confirm',
      continue: 'Continue',
      
      // Auth
      signIn: 'Sign In',
      signUp: 'Create Account',
      signOut: 'Sign Out',
      forgotPassword: 'Reset Password',
      resetPassword: 'Set New Password',
      
      // Filters and search
      search: 'Search',
      filter: 'Filter',
      clear: 'Clear',
      apply: 'Apply',
      
      // Files and data
      upload: 'Upload',
      download: 'Download',
      export: 'Export',
      import: 'Import',
      
      // Forms
      submit: 'Submit',
      reset: 'Reset',
    }
  },
  pages: {
    university: {
      title: 'Moscow State University',
      description: 'Leading classical university in Russia, center of education and science. Founded in 1755.',
      buttons: {
        createEvent: 'Create Event',
        createMailing: 'Send Message',
        exportAnalytics: 'Download Report',
        addStudent: 'Add Student',
        addTeacher: 'Add Teacher',
        manageGroups: 'Manage Groups',
        viewSchedule: 'Schedule',
        viewGrades: 'Grades'
      },
      stats: {
        students: 'Students',
        teachers: 'Teachers',
        programs: 'Study Programs',
        faculties: 'Faculties',
        events: 'Events',
        publications: 'Scientific Publications'
      },
      contacts: {
        title: 'Contact Details',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        website: 'Website'
      }
    },
    student: {
      buttons: {
        enrollCourse: 'Enroll',
        submitAssignment: 'Submit Work',
        joinEvent: 'Join',
        viewCertificate: 'View Certificate',
        askQuestion: 'Ask Question',
        bookConsultation: 'Book Consultation'
      }
    },
    teacher: {
      buttons: {
        createAssignment: 'Create Assignment',
        gradeWork: 'Grade Work',
        startLesson: 'Start Lesson',
        endLesson: 'End Lesson',
        takeAttendance: 'Take Attendance',
        provideFeedback: 'Give Feedback'
      }
    },
    courses: {
      buttons: {
        create: 'Create Course',
        edit: 'Edit Course',
        publish: 'Publish',
        unpublish: 'Unpublish',
        addMaterial: 'Add Material',
        addTest: 'Create Test'
      }
    },
    events: {
      buttons: {
        register: 'Register',
        cancelRegistration: 'Cancel Registration',
        share: 'Share',
        addToCalendar: 'Add to Calendar',
        viewDetails: 'View Details',
        leaveReview: 'Leave Review'
      }
    }
  }
} as const; 