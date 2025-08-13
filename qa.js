const qaPairs = [
  {
    question: "Hello",
    answer: "Hello! How may I assist you today with information about Government Polytechnic College, Kota?"
  },
  {
    question: "Hi",
    answer: "Hi there! Please let me know if you have any questions regarding GPCK."
  },
  {
    question: "Hey",
    answer: "Hey! How can I help you with details about the college?"
  },
  {
    question: "Good morning",
    answer: "Good morning! What information would you like to know about Government Polytechnic College?"
  },
  {
    question: "Good evening",
    answer: "Good evening! How may I assist you today?"
  },
  {
    question: "Namaste",
    answer: "Namaste! How can I assist you with information about Government Polytechnic College, Kota?"
  },
  {
    question: "What's up?",
    answer: "I am here to help you with any queries related to the college. How may I assist you?"
  },
  {
    question: "How are you?",
    answer: "I'm doing well, thank you! How can I assist you regarding GPCK?"
  },
  {
    question: "Hi there!",
    answer: "Hello! Feel free to ask any questions you have about the college."
  },
  {
    question: "How do I apply for admission?",
    answer: "You can apply for admission to Government Polytechnic College, Kota through the official Rajasthan Polytechnic counseling portal at dteapp.hte.rajasthan.gov.in when the application window opens."
  },
  {
    question: "How to take admission?",
    answer: "Admission to GPCK is based on merit through the Rajasthan state-level online counseling process. Register on the official portal, provide your academic details, and follow the steps."
  },
  {
    question: "What is the admission procedure?",
    answer: "The admission process includes online registration on the DTE Rajasthan portal, choice filling of colleges and branches, document verification, and seat allotment based on your merit."
  },
  {
    question: "How to take admission in college?",
    answer: "To take admission in Government Polytechnic College, Kota, visit the DTE Rajasthan portal during the admission period, register yourself, fill in your choices, and upload the required documents."
  },
  {
    question: "GPCK admission process?",
    answer: "Admissions at Government Polytechnic College, Kota are conducted through the Directorate of Technical Education, Rajasthan, based on 10th-grade merit and the centralized counseling process."
  },
  {
    question: "Tell me about admissions",
    answer: "Admissions to diploma courses at GPCK usually start in June or July every year. You must apply through the Rajasthan Polytechnic online counseling process."
  },
  {
    question: "When does admission start?",
    answer: "Admissions at Government Polytechnic College, Kota generally begin in June or July, after the declaration of 10th board results and the release of the counseling schedule by DTE Rajasthan."
  },
  {
    question: "What is the fee structure of diploma courses?",
    answer: "At Government Polytechnic College, Kota, the diploma course fee is approximately ₹9,470 per year for regular students, as per government norms."
  },
  {
    question: "What are the diploma fees?",
    answer: "The annual fee for diploma courses at GPCK is around ₹9,470."
  },
  {
    question: "Branch-wise fees?",
    answer: "The fee structure at GPCK is generally the same for all branches, as it follows the standard fee prescribed by the Directorate of Technical Education, Rajasthan."
  },
  {
    question: "Tell me the fee details",
    answer: "The total annual fee at GPCK is approximately ₹9,470. Additional charges may apply for hostel accommodation and examination fees if applicable."
  },
  {
    question: "What is the college fee?",
    answer: "The college fee at GPCK is approximately ₹9,470 per year."
  },
  {
    question: "Where can I find the academic calendar?",
    answer: "The academic calendar of Government Polytechnic College, Kota is available on the official DTE Rajasthan website or can be obtained from the college notice board."
  },
  {
    question: "When will the calendar be released?",
    answer: "The academic calendar is usually released by the Directorate of Technical Education, Rajasthan before the commencement of each academic session."
  },
  {
    question: "Semester start dates?",
    answer: "At GPCK, odd semesters typically start in July and even semesters in January, depending on the DTE Rajasthan schedule."
  },
  {
    question: "College calendar?",
    answer: "You can check or download the academic calendar from the DTE Rajasthan portal or inquire directly at the college administration office."
  },
  {
    question: "Where can I get the holiday list?",
    answer: "The holiday list is a part of the academic calendar issued by DTE Rajasthan and is also displayed on the GPCK notice board."
  },
  {
    question: "What is the syllabus for diploma students?",
    answer: "The syllabus at Government Polytechnic College, Kota is designed as per the Board of Technical Education Rajasthan (BTER) and follows AICTE guidelines, including theory subjects and practical labs."
  },
  {
    question: "What is the syllabus?",
    answer: "You can download the branch-wise syllabus from the official BTER website or inquire at the academic section of GPCK."
  },
  {
    question: "Diploma subjects list?",
    answer: "Each diploma branch at GPCK has its own subject list. Common subjects in the first year include Engineering Mathematics, Applied Physics, Chemistry, Communication Skills, and Workshop Practice."
  },
  {
    question: "Where can I find syllabus updates?",
    answer: "Syllabus updates are published on the official Board of Technical Education Rajasthan (BTER) website and are also notified by GPCK departments."
  },
  {
    question: "Course content details?",
    answer: "The course content includes core theoretical knowledge, practical training, and skill development modules relevant to each engineering branch offered at GPCK."
  },
  {
    question: "Where do I find exam-related notices and updates?",
    answer: "At GPCK, exam-related notices are published on the official college notice boards and also available on the Board of Technical Education Rajasthan (BTER) website."
  },
  {
    question: "Where is the exam notice board?",
    answer: "The exam notice board at GPCK is located near the main administrative office and departmental buildings."
  },
  {
    question: "I want to see the exam timetable",
    answer: "Exam timetables for GPCK students are released by BTER and displayed on both the official BTER website and the college notice board."
  },
  {
    question: "Exam form submission dates?",
    answer: "Exam form submission dates are announced by BTER and notified at GPCK through departmental notices and official college communication."
  },
  {
    question: "Tell me the exam schedule",
    answer: "The detailed exam schedule is provided by BTER and made available on their website. It is also displayed on GPCK’s notice boards before the exam period."
  },
  {
    question: "How can I check my results online?",
    answer: "For GPCK students, diploma results can be checked on the official Board of Technical Education Rajasthan (BTER) website by entering your roll number or enrollment number."
  },
  {
    question: "How to see the result?",
    answer: "Visit the BTER official website (http://techedu.rajasthan.gov.in) and go to the 'Examination Results' section to view your result."
  },
  {
    question: "When will the exam results come out?",
    answer: "BTER usually declares diploma exam results within 30 to 45 days after the completion of exams. Keep checking the official website for updates."
  },
  {
    question: "I want to download the marksheet",
    answer: "Once results are declared, provisional marksheets can be downloaded from the BTER result portal. The original marksheets are later distributed by GPCK."
  },
  {
    question: "Diploma exam results",
    answer: "Diploma results for GPCK are published by BTER and available online at their official portal. The college also puts up result notices on the campus notice board."
  },
  
    {
      question: "Is hostel facility available in the college?",
      answer: "No, GPCK does not offer hostel facilities for students. You may explore nearby private hostels or PG accommodations."
    },
    {
      question: "Tell me about the hostel",
      answer: "Government Polytechnic College, Kota does not have its own hostel. Students generally arrange for private accommodation nearby."
    },
    {
      question: "Boys and girls hostel?",
      answer: "Currently, GPCK does not provide hostel facilities for either boys or girls. Private hostels and PGs are available around the campus."
    },
    {
      question: "Is there a mess facility in the hostel?",
      answer: "No, as the college does not offer hostel accommodation, there is no mess facility provided by GPCK."
    },
    {
      question: "College hostel fees",
      answer: "GPCK does not charge any hostel fees as it does not have hostel facilities. Students opting for private hostels must bear those expenses separately."
    },
    {
      question: "Are there any scholarships available for students?",
      answer: "Yes, GPCK students can apply for various scholarships like Pragati, Post-Matric, and Scooty Yojana, depending on eligibility."
    },
    {
      question: "How do I apply for a scholarship?",
      answer: "You can apply online through the official scholarship portals like SJE Rajasthan or NSP (National Scholarship Portal), and submit documents as required."
    },
    {
      question: "State or central scholarships?",
      answer: "GPCK students are eligible for both state (Rajasthan government) and central (AICTE/NSP) scholarships."
    },
    {
      question: "What is the scholarship eligibility?",
      answer: "Eligibility varies: for example, Pragati is for girl students from economically weaker sections, and the Scooty Yojana requires 75% or above in 12th standard."
    },
    {
      question: "Will I get financial aid?",
      answer: "Yes, if you meet the criteria such as income limits, caste/category, and academic performance, you may receive financial assistance or benefits like free textbooks, fee reimbursement, or even a scooty."
    },
    {
      question: "What is the college policy on ragging?",
      answer: "The college maintains a zero-tolerance policy towards ragging and strictly adheres to anti-ragging laws."
    },
    {
      question: "Is ragging allowed?",
      answer: "Ragging is strictly prohibited on campus and surrounding areas."
    },
    {
      question: "What are the anti-ragging rules?",
      answer: "Anti-ragging rules require immediate reporting of incidents and strict action against offenders."
    },
    {
      question: "How to file a ragging complaint?",
      answer: "Complaints can be filed with the anti-ragging committee or through the official college grievance portal."
    },
    {
      question: "Who is on the ragging committee?",
      answer: "The anti-ragging committee includes faculty members and senior student representatives."
    },
    {
      question: "What is taught in the Computer Science department at GPCK?",
      answer: "The CS department covers programming languages (like C, Python), data structures, web development, DBMS, and networking fundamentals."
    },
    {
      question: "Which programming languages are taught?",
      answer: "Students are taught C, Python, and also basic web languages like HTML, CSS, and JavaScript."
    },
    {
      question: "Is there a computer lab in CS department?",
      answer: "Yes, GPCK has a dedicated computer lab for CS students with internet access and updated software tools."
    },
    {
      question: "What kind of projects do CS diploma students do?",
      answer: "Projects may include basic websites, database applications, mini-games, and simple automation systems using programming."
    },
    {
      question: "Are internships available in CS department?",
      answer: "Yes, CS students are encouraged to do internships during the 5th or 6th semester, often at local IT firms or through government skill development programs."
    },
    {
      question: "Is coding taught practically?",
      answer: "Yes, practical sessions are regularly held in the computer lab where students write and run code under faculty guidance."
    },
    {
      question: "What job roles can I get after diploma in CS from GPCK?",
      answer: "After diploma, students can work as junior software developers, data entry operators, IT support staff, or pursue further education like BCA or lateral entry in B.Tech."
    },
    {
      question: "Can I prepare for government exams after CS diploma?",
      answer: "Yes, diploma students from CS can apply for various government posts like Junior Engineer (JE), Data Operator, or pursue SSC and state-level exams."
    },
    {
      question: "Do you provide placement support in CS department?",
      answer: "Placement assistance is available and students are also encouraged to attend job fairs and campus drives organized by DTE Rajasthan."
    },
    {
      question: "How many semesters are there in CS diploma?",
      answer: "The diploma course is of 3 years duration divided into 6 semesters, including theoretical subjects, practicals, and a final project."
    },
    {
      question: "How many seats are there in CSE branch",
      answer: "At Government Polytechnic College, Kota (GPCK), the Computer Science and Engineering (CSE) branch has a total of 42 seats available for admission. Additionally, a few seats may be available for lateral entry students (those joining directly in the second year), but the main first-year intake for CSE is 42 students."
    },
  ]
