import {
  AcademyConfig,
  Course,
  Instructor,
  Facility,
  ResultStory,
  GalleryItem,
  RecruitmentNotice,
} from '../types';

export const academyConfig: AcademyConfig = {
  name: 'Swarajya Career Academy, Aravade',
  marathiName: 'स्वराज्य करिअर अकॅडमी, आरवडे',
  tagline: 'Maharashtra Police & Army Bharti Training Institute',
  marathiTagline: 'महाराष्ट्र पोलीस व सैन्य भरती पूर्व शारीरिक आणि लेखी परीक्षा परिपूर्ण केंद्र',
  logoText: 'स्वराज्य',
  phone: '+919922456028',
  whatsappNumber: '919922456028',
  email: 'admission@swarajyacareeracademy.com',
  address: 'मांजर्डे रोड, आरवडे, तालुका - तासगाव, जिल्हा - सांगली, महाराष्ट्र',
  workingHours: 'सोमवार ते शनिवार: सकाळी ०५:३० ते रात्री ०८:०० | रविवार: सकाळी ०६:०० ते दुपारी १२:००',
  mapUrl: 'https://maps.google.com/?q=Aravade+Tasgaon+Sangli',
  mapEmbedPlaceholder: true,
  primaryLanguage: 'mr',
  announcement: {
    enabled: true,
    text: 'नवीन पोलीस भरती व अग्निवीर विशेष बॅच प्रवेश सुरू! मर्यादित जागा उपलब्ध.',
    link: '/admission',
  },
};

export const coursesData: Course[] = [
  {
    id: 'police-bharti',
    slug: 'police-bharti',
    title: 'Maharashtra Police Constable Bharti Batch',
    marathiTitle: 'महाराष्ट्र पोलीस शिपाई भरती विशेष बॅच',
    category: 'police',
    summary: 'शारीरिक चाचणी (Ground) आणि १०० गुणांच्या लेखी परीक्षेची संपूर्ण पायाभूत ते सराव तयारी.',
    trainingTypes: 'both',
    duration: '६ महिने / १ वर्ष',
    batchTiming: 'सकाळी ०५:४५ - ०८:३० (मैदान) | दुपारी ०३:०० - ०६:३० (लेखी वर्ग)',
    feeLabel: 'प्रवेश शुल्कासाठी संपर्क साधा (हप्त्यांची सोय उपलब्ध)',
    admissionStatus: 'Open',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    badge: 'सर्वात लोकप्रिय बॅच',
    details: {
      overview:
        'महाराष्ट्र पोलीस भरतीच्या बदलत्या पद्धतीनुसार १६०० मीटर/८०० मीटर धावणे, १०० मीटर धावणे, गोळाफेक या शारीरिक इव्हेंट्सचे तज्ज्ञ प्रशिक्षकांकडून वेळेचे अचूक नियोजन व सराव. सोबतच अंकगणित, बुद्धिमत्ता, मराठी व्याकरण आणि सामान्य ज्ञान (GK) चे सखोल अध्यापन व दर रविवारी OMR शीटवर १०० गुणांची सराव परीक्षा.',
      eligibility: [
        'शैक्षणिक पात्रता: १२ वी उत्तीर्ण (Higher Secondary 10+2)',
        'वयोमर्यादा: १८ ते २८ वर्षे (राखीव प्रवर्गासाठी शासकीय नियमांनुसार ३३ वर्षांपर्यंत शिथिलता)',
        'उंची: पुरुष किमान १६५ सेमी, महिला किमान १५८ सेमी',
        'छाती (पुरुष): न फुगवता किमान ७९ सेमी आणि फुगवून ५ सेमी जास्त',
      ],
      physicalStandards: {
        running: 'पुरुष: १६०० मी (२० गुण) + १०० मी (१५ गुण) | महिला: ८०० मी (२० गुण) + १०० मी (१५ गुण)',
        shotPut: 'गोळाफेक (१५ गुण): पुरुष ७.२६ किलो | महिला ४ किलो',
        height: 'पुरुष: १६५ सेमी | महिला: १५८ सेमी',
        chest: 'पुरुष: ७९ सेमी (किमान ५ सेमी फुगवणे आवश्यक)',
      },
      writtenSyllabus: [
        'अंकगणित (२५ गुण): संख्याज्ञान, लसावि-मसावि, नफा-तोटा, शेकडेवारी, सरळव्याज व चक्रवाढ व्याज',
        'बुद्धिमत्ता चाचणी (२५ गुण): मालिका, नातेसंबंध, दिशा, घड्याळ, तर्क व अनुमान',
        'मराठी व्याकरण (२५ गुण): वर्णमाला, संधी, समास, प्रयोग, समानार्थी व विरुद्धार्थी शब्द',
        'सामान्य ज्ञान व चालू घडामोडी (२५ गुण): इतिहास, भूगोल, राज्यघटना, विज्ञान, महाराष्ट्र विशेष घडामोडी',
      ],
      batchSchedule: {
        morningGround: 'सकाळी ०५:४५ ते ०८:३० — वॉर्मअप, तंत्रशुद्ध रनिंग ड्रिल, गोळाफेक तंत्र आणि स्ट्रेचिंग',
        writtenClass: 'दुपारी ०३:०० ते ०६:३० — दैनंदिन ३ तास विषयवार सखोल लेक्चर्स व शंका निरसन',
        weeklyTest: 'प्रत्येक रविवारी सकाळी ०९:०० ते १०:३० — १०० गुणांची OMR सराव परीक्षा व रँक विश्लेषण',
      },
    },
    topics: ['शारीरिक मैदानी तयारी', 'अंकगणित व बुद्धिमत्ता', 'मराठी व्याकरण', 'चालू घडामोडी', 'साप्ताहिक OMR टेस्ट'],
    faqs: [
      {
        question: 'पोलीस भरतीसाठी शारीरिक तयारीची सुरुवात कशी केली जाते?',
        answer: 'सुरुवातीला विद्यार्थ्यांच्या स्टॅमिना आणि स्नायूंच्या मजबुतीसाठी बेसिक कंडिशनिंग केले जाते. त्यानंतर १६०० मीटरसाठी पेस मेंटेनन्स आणि गोळाफेकीचे बायोमेकॅनिक्स तंत्र शिकवले जाते.',
      },
      {
        question: 'लेखी परीक्षेच्या नोट्स व सराव प्रश्नपत्रिका दिल्या जातात का?',
        answer: 'होय, प्रत्येक विषयाचे छापील अभ्यास साहित्य, मागील ५ वर्षांतील प्रश्नपत्रिकांचे विश्लेषण आणि दर आठवड्याला मॉडेल प्रश्नपत्रिका दिल्या जातात.',
      },
      {
        question: 'हॉस्टेल आणि मेसची सुविधा उपलब्ध आहे का?',
        answer: 'अकॅडमीच्या मुख्य संकुलाजवळ सुसज्ज मुलांचे व मुलींचे स्वतंत्र वसतिगृह आणि पौष्टिक जेवणाची मेस सुविधा उपलब्ध आहे.',
      },
    ],
  },
  {
    id: 'army-bharti',
    slug: 'army-bharti',
    title: 'Indian Army Agniveer GD & Tradesman Batch',
    marathiTitle: 'भारतीय सैन्य (अग्निवीर) GD व ट्रेड्समन भरती बॅच',
    category: 'army',
    summary: '१.६ किमी १६०० मी रनिंग (५:३० मिनिटांचे लक्ष्य), बीम (Pull-ups) आणि CEE लेखी परीक्षेची संपूर्ण तयारी.',
    trainingTypes: 'both',
    duration: '४ ते ६ महिने (भरती रॅलीपर्यंत)',
    batchTiming: 'सकाळी ०५:१५ - ०८:०० (कडक शारीरिक सराव) | संध्याकाळी ०४:०० - ०७:०० (CEE वर्ग)',
    feeLabel: 'प्रवेश शुल्कासाठी संपर्क साधा',
    admissionStatus: 'Filling Fast',
    image: 'https://images.unsplash.com/photo-1579975096649-e773152b04cb?auto=format&fit=crop&w=800&q=80',
    badge: 'अग्निवीर विशेष',
    details: {
      overview:
        'भारतीय सैन्यदलाच्या अग्निवीर भरती रॅलीत ग्रुप-१ (६० गुण) मिळवण्यासाठी १६०० मीटर रनिंग ५ मिनिटे ३० सेकंदांच्या आत पूर्ण करण्याची शिस्तबद्ध तयारी. १० पैकी १० बीम (४० गुण), ९ फूट डिच आणि झिग-झॅग बॅलन्सचे सराव. यासोबतच कॉमन एन्ट्रन्स एक्झाम (CEE) कॉम्प्युटर बेस्ड परीक्षेचे परिपूर्ण मार्गदर्शन.',
      eligibility: [
        'शैक्षणिक पात्रता (GD): १० वी किमान ४५% गुणांसह उत्तीर्ण (प्रत्येक विषयात किमान ३३%)',
        'शैक्षणिक पात्रता (Tradesman): १० वी / ८ वी उत्तीर्ण',
        'वयोमर्यादा: १७.५ ते २१ वर्षे',
        'शारीरिक पात्रता: उंची किमान १६८ सेमी (महाराष्ट्र रिजन), छाती ७७ सेमी + ५ सेमी फुगवणे',
      ],
      physicalStandards: {
        running: '१.६ किमी: ग्रुप १ (५:३० मिनिटे - ६० गुण) | ग्रुप २ (५:३१ ते ५:४५ - ४८ गुण)',
        pullUps: '१० बीम = ४० गुण | ९ बीम = ३३ गुण | ८ बीम = २७ गुण',
        shotPut: '९ फूट खड्डा उडी (Qualifying) आणि झिगझॅग बॅलन्स (Qualifying)',
        height: 'किमान १६८ सेमी (GD/Tradesman)',
        chest: 'किमान ७७ सेमी (+ ५ सेमी फुगवणे अनिवार्य)',
      },
      writtenSyllabus: [
        'General Knowledge (१५ प्रश्न - ३० गुण): भारताचा इतिहास, भूगोल, सैन्यदल, क्रीडा, आंतरराष्ट्रीय संस्था',
        'General Science (१५ प्रश्न - ३० गुण): भौतिकशास्त्र, रसायनशास्त्र, जीवशास्त्र (१० वी स्तर)',
        'Maths (१५ प्रश्न - ३० गुण): बीजगणित, भूमिती, त्रिकोणमिती, अंकगणित',
        'Logical Reasoning (५ प्रश्न - १० गुण): तर्कक्षमता व कोडिंग',
      ],
      batchSchedule: {
        morningGround: 'सकाळी ०५:१५ ते ०८:०० — आर्मी स्टाईल रनिंग, क्रॉस-कंट्री, बीम ड्रिल व स्ट्रेंथ ट्रेनिंग',
        writtenClass: 'संध्याकाळी ०४:०० ते ०७:०० — CEE ऑनलाइन टेस्ट पॅटर्ननुसार लेक्चर्स आणि सराव',
        weeklyTest: 'प्रत्येक शनिवारी मॉक फिजिकल टेस्ट व ऑनलाइन CEE टेस्ट सराव',
      },
    },
    topics: ['१६०० मी रनिंग ग्रुप-१', '१०/१० बीम तंत्र', 'CEE कॉम्प्युटर परीक्षा सराव', 'आर्मी मेडिकल पूर्व तपासणी मार्गदर्शन'],
    faqs: [
      {
        question: 'अग्निवीर भरतीची लेखी परीक्षा आधी होते की फिजिकल?',
        answer: 'नव्या नियमांनुसार प्रथम ऑनलाइन CEE लेखी परीक्षा होते आणि त्यानंतर उत्तीर्ण उमेदवारांची शारीरिक रॅली होते. अकॅडमीमध्ये दोन्ही टप्प्यांची एकाच वेळी तयारी करून घेतली जाते.',
      },
      {
        question: 'आर्मीच्या मेडिकल टेस्टबद्दल काही मार्गदर्शन केले जाते का?',
        answer: 'होय, सेवानिवृत्त सैन्य वैद्यकीय अधिकाऱ्यांच्या मार्गदर्शनाखाली फ्लॅट फूट, नॉक नी, नजर व इतर वैद्यकीय निकषांची प्राथमिक चाचणी व आवश्यक व्यायाम सुचवले जातात.',
      },
    ],
  },
  {
    id: 'physical-fitness-special',
    slug: 'physical-special',
    title: 'Only Physical Fitness & Ground Training',
    marathiTitle: 'फक्त शारीरिक मैदानी चाचणी विशेष बॅच',
    category: 'special',
    summary: 'ज्या विद्यार्थ्यांचा लेखी अभ्यास चांगला आहे, त्यांच्यासाठी फक्त मैदानी इव्हेंट्सवर विशेष लक्ष केंद्रित.',
    trainingTypes: 'physical',
    duration: '३ ते ६ महिने',
    batchTiming: 'सकाळी ०५:४५ - ०८:३० किंवा संध्याकाळी ०५:०० - ०७:००',
    feeLabel: 'प्रवेश शुल्कासाठी संपर्क साधा',
    admissionStatus: 'Open',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    details: {
      overview:
        'धावण्याचा स्टॅमिना वाढवणे, गोळा फेकताना अचूक अँगल आणि पॉवर जनरेशन, तसेच १०० मीटर स्प्रिंटमधील स्पीड इम्प्रूव्हमेंटसाठी राष्ट्रीय खेळाडू प्रशिक्षकांचे थेट मार्गदर्शन.',
      eligibility: ['पोलीस, वनरक्षक, राज्य उत्पादन शुल्क किंवा सैन्य भरतीची तयारी करणारे सर्व उमेदवार.'],
      batchSchedule: {
        morningGround: 'सकाळी ०५:४५ ते ०८:३० किंवा संध्याकाळी ०५:०० ते ०७:००',
        writtenClass: 'लागू नाही (केवळ मैदानी)',
        weeklyTest: 'दर रविवारी अधिकृत वेळेनुसार संपूर्ण ग्राउंड मॉक टेस्ट',
      },
    },
    topics: ['१६०० मी / ८०० मी पेस ट्रेनिंग', 'गोळाफेक अचूक टेक्निक', '१०० मी स्प्रिंट स्टार्ट ड्रिल', 'डायट व रिकव्हरी प्लॅन'],
    faqs: [
      {
        question: 'इंज्युरी (पायाच्या दुखण्यावर) काही विशेष उपाय सांगितले जातात का?',
        answer: 'होय, सिन स्प्लिंट्स किंवा स्नायूंच्या ताणावर मात करण्यासाठी फिजियोथेरपी स्ट्रेच आणि आइसिंगचे योग्य तंत्र शिकवले जाते.',
      },
    ],
  },
  {
    id: 'written-exam-coaching',
    slug: 'written-coaching',
    title: 'Police & Defence Written Exam Foundation',
    marathiTitle: 'पोलीस व संरक्षण भरती लेखी परीक्षा फाउंडेशन बॅच',
    category: 'combined',
    summary: 'अंकगणित, बुद्धिमत्ता, मराठी व्याकरण आणि सामान्य ज्ञान विषयांची पायाभूत ते प्रगत तयारी.',
    trainingTypes: 'written',
    duration: '५ महिने',
    batchTiming: 'दुपारी ०१:०० - ०५:००',
    feeLabel: 'प्रवेश शुल्कासाठी संपर्क साधा',
    admissionStatus: 'Open',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    details: {
      overview:
        'सर्व स्पर्धा परीक्षांमध्ये विचारल्या जाणाऱ्या प्रश्नांची अचूक शॉर्टकट पद्धती, सूत्रे आणि वेळेत प्रश्न सोडवण्याची कौशल्ये विकसित करण्यासाठी समर्पित लेखी वर्ग.',
      eligibility: ['१० वी / १२ वी उत्तीर्ण विद्यार्थी.'],
      batchSchedule: {
        morningGround: 'लागू नाही (केवळ लेखी)',
        writtenClass: 'दुपारी ०१:०० ते ०५:०० (४ तास नियमित तासिका)',
        weeklyTest: 'प्रत्येक रविवारी १०० गुणांची परीक्षा',
      },
    },
    topics: ['अंकगणित शॉर्टकट ट्रिक्स', 'बुद्धिमत्ता कोडे सोडवणे', 'मराठी व्याकरण सराव', 'चालू घडामोडी मासिक संच'],
    faqs: [
      {
        question: 'अभ्यासिकेची (Library) सोय आहे का?',
        answer: 'होय, अकॅडमीच्या विद्यार्थ्यांना मोफत २४ तास शांत व वातानुकूलित अभ्यासिका उपलब्ध आहे.',
      },
    ],
  },
];

export const instructorsData: Instructor[] = [
  {
    id: 'inst-1',
    name: 'कमांडो संभाजीराव देशमुख',
    role: 'मुख्य शारीरिक संचालक व माजी सैन्य प्रशिक्षक',
    qualifications: 'Ex-Indian Army (18 Years Service), NIS Certified Athletic Coach',
    experienceLabel: '१८ वर्षे सैन्य सेवा + ९ वर्षे अकॅडमी प्रशिक्षण',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'भारतीय सैन्यातील अनुभवाच्या जोरावर शिस्त, अचूक धावण्याचे तंत्र आणि गोळाफेकीच्या आधुनिक पद्धतींचे मार्गदर्शन.',
  },
  {
    id: 'inst-2',
    name: 'प्रा. सचिन कदम',
    role: 'वरिष्ठ मार्गदर्शक — गणित व बुद्धिमत्ता',
    qualifications: 'M.Sc. Mathematics, स्पर्धा परीक्षा तज्ज्ञ (१०+ वर्षे अध्यापन)',
    experienceLabel: '१०+ वर्षे स्पर्धा परीक्षा अध्यापन अनुभव',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'अंकगणित व बुद्धिमत्तेचे कठीण प्रश्न अगदी काही सेकंदात सोडवण्याच्या शॉर्टकट पद्धतींसाठी राज्यभरात ख्यातनाम.',
  },
  {
    id: 'inst-3',
    name: 'प्रा. सुवर्णा पाटील',
    role: 'मराठी व्याकरण व चालू घडामोडी मार्गदर्शक',
    qualifications: 'M.A. Marathi, B.Ed, MPSC मुलाखत अनुभव',
    experienceLabel: '८ वर्षे अध्यापन अनुभव',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'मराठी व्याकरणातील पैकीच्या पैकी गुणांची तयारी आणि चालू घडामोडींचे सुटसुटीत विश्लेषणात्मक मार्गदर्शन.',
  },
];

export const facilitiesData: Facility[] = [
  {
    id: 'running-ground',
    title: '४०० मीटर मानक धावण्याचा ट्रॅक (Running Track)',
    description: 'अधिकृत पोलीस व सैन्य भरती मैदानाप्रमाणे तयार केलेला ४०० मीटरचा मानक मातीचा व सिंथेटिक सराव ट्रॅक.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    confirmed: true,
    features: ['४०० मी रनिंग ट्रॅक', '१०० मी स्प्रिंट ट्रॅक', 'स्टॉपवॉच टाइमिंग सेन्सर', 'रात्रीच्या सरावासाठी फ्लडलाईट्स'],
  },
  {
    id: 'shotput-beam-area',
    title: 'गोळाफेक व पुल-अप्स (बीम) विशेष प्रशिक्षण क्षेत्र',
    description: 'अधिकृत मापाचे गोळाफेक रिंग, विविध वजनाचे गोळे आणि सैन्य नियमांनुसार तयार केलेले मजबूत बीम बार.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    confirmed: true,
    features: ['अधिकृत गोळाफेक रिंग व मार्किंग', '१०+ स्टँडर्ड बीम बार', '९ फूट लांब उडी खड्डा', 'झिगझॅग बॅलन्स बार'],
  },
  {
    id: 'smart-classrooms',
    title: 'आधुनिक डिजिटल वर्गखोल्या (Smart Classrooms)',
    description: 'आरामदायी बैठक व्यवस्था, डिजिटल स्क्रीन आणि शांत वातावरणामुळे लेखी अभ्यासात १००% एकाग्रता.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    confirmed: true,
    features: ['प्रोजेक्टर व डिजिटल बोर्ड', 'माईक व साऊंड सिस्टीम', 'हवेशीर व प्रकाशमान खोल्या', 'दररोज ओएमआर शीट सराव'],
  },
  {
    id: 'hostel-mess',
    title: 'स्वतंत्र वसतिगृह व पौष्टिक मेस (Hostel & Mess)',
    description: 'बाहेरगावच्या विद्यार्थ्यांसाठी सुरक्षित, सीसीटीव्हीयुक्त स्वतंत्र मुलांचे व मुलींचे वसतिगृह आणि सकस आहार.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    confirmed: true,
    features: ['२४ तास शुद्ध पिण्याचे पाणी (RO)', 'सकाळचा पौष्टिक नाश्ता व अंडी/दूध', 'सीसीटीव्ही सुरक्षा यंत्रणा', 'वायफाय व अभ्यासिका'],
  },
];

export const resultStoriesData: ResultStory[] = [
  {
    id: 'res-1',
    studentDisplayName: 'रोहन विठ्ठल जाधव',
    category: 'Police Bharti',
    year: '२०२३-२४',
    rankOrPost: 'पोलीस शिपाई (पुणे ग्रामीण)',
    story: 'अकॅडमीच्या नियमित १६०० मीटर पेस ट्रेनिंग आणि दर आठवड्याच्या १०० गुणांच्या ओएमआर टेस्टमुळे पहिल्याच प्रयत्नात यश मिळाले.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    verified: true,
    consentConfirmed: true,
  },
  {
    id: 'res-2',
    studentDisplayName: 'पूजा बाळासाहेब पाटील',
    category: 'Police Bharti',
    year: '२०२३-२४',
    rankOrPost: 'महिला पोलीस शिपाई (मुंबई पोलीस)',
    story: 'गोळाफेकीमध्ये मला केवळ ६ गुण मिळत होते, शिक्षकांनी तंत्रात सुधारणा केल्याने प्रत्यक्ष भरतीत पूर्ण १५ पैकी १५ गुण मिळाले.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    verified: true,
    consentConfirmed: true,
  },
  {
    id: 'res-3',
    studentDisplayName: 'अजय मारुती शिंदे',
    category: 'Army/Agniveer',
    year: '२०२४',
    rankOrPost: 'भारतीय सैन्य (Agniveer GD - Pune ARO)',
    story: '५ मिनिटे २० सेकंदात १६०० मीटर रनिंग पूर्ण करून ग्रुप-१ मध्ये ६० गुण मिळवले. अकॅडमीच्या शिस्तीला आणि सरावाला तोड नाही.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    verified: true,
    consentConfirmed: true,
  },
];

export const galleryItemsData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'सकाळचे १६०० मीटर रनिंग पेस प्रशिक्षण',
    category: 'Ground',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    alt: 'विद्यार्थी धावण्याच्या ट्रॅकवर सराव करताना',
  },
  {
    id: 'gal-2',
    title: 'गोळाफेक बायोमेकॅनिक्स व टेक्निक सेशन',
    category: 'Ground',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    alt: 'प्रशिक्षक गोळाफेकीचे तंत्र समजावून सांगताना',
  },
  {
    id: 'gal-3',
    title: 'लेखी परीक्षा वर्गखोलीत चालू असलेले लेक्चर',
    category: 'Classroom',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    alt: 'डिजिटल स्क्रीनवर गणित शिकताना विद्यार्थी',
  },
  {
    id: 'gal-4',
    title: 'साप्ताहिक १०० गुणांची अधिकृत OMR सराव परीक्षा',
    category: 'Classroom',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    alt: 'विद्यार्थी परीक्षा हॉलमध्ये पेपर सोडवताना',
  },
  {
    id: 'gal-5',
    title: 'निवड झालेल्या विद्यार्थ्यांचा सत्कार समारंभ',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    alt: 'पोलीस भरतीत यशस्वी विद्यार्थ्यांचा सत्कार',
  },
  {
    id: 'gal-6',
    title: 'वसतिगृह व अभ्यासिका (Study Hall)',
    category: 'Hostel',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    alt: 'अभ्यासिकेत मन लावून अभ्यास करणारे विद्यार्थी',
  },
];

export const recruitmentNoticesData: RecruitmentNotice[] = [
  {
    id: 'notice-1',
    title: 'महाराष्ट्र पोलीस शिपाई भरती २०२६ — नवीन जाहिरात लवकरच अपेक्षित',
    authority: 'महाराष्ट्र पोलीस घटक (गृह विभाग)',
    category: 'Police',
    summary: 'राज्यभरात पोलीस शिपाई, चालक व बँड्समन पदांसाठी अंदाजे १७,०००+ जागांची भरती प्रक्रिया प्रस्तावित. पात्रता व वयोमर्यादा तपशील पहा.',
    publishedDate: '२०२६-०९-१५',
    lastCheckedDate: '२०२६-१०-२०',
    deadline: 'अपेक्षित: नोव्हेंबर २०२६',
    status: 'Upcoming',
    officialNoticeUrl: 'https://policerecruitment2024.mahait.org',
    isDemo: true,
  },
  {
    id: 'notice-2',
    title: 'भारतीय सैन्य अग्निवीर भरती रॅली २०२६ — पुणे व कोल्हापूर ARO',
    authority: 'Indian Army Recruiting Directorate',
    category: 'Army',
    summary: 'अग्निवीर जनरल ड्युटी (GD), टेक्निकल, क्लर्क व ट्रेड्समन पदांसाठी ऑनलाइन नोंदणी सुरू. CEE लेखी परीक्षा संगणकावर होणार.',
    publishedDate: '२०२६-०८-०१',
    lastCheckedDate: '२०२६-१०-१८',
    deadline: '२०२६-११-३०',
    status: 'Active',
    officialNoticeUrl: 'https://joinindianarmy.nic.in',
    isDemo: true,
  },
  {
    id: 'notice-3',
    title: 'महाराष्ट्र राज्य उत्पादन शुल्क (दारूबंदी पोलीस) जवान भरती',
    authority: 'राज्य उत्पादन शुल्क विभाग',
    category: 'Other',
    summary: 'जवान व जवान-नि-वाहनचालक संवर्गातील पदांची शारीरिक चाचणी व गुणवत्ता यादी अंतिम टप्प्यात.',
    publishedDate: '२०२६-०३-१०',
    lastCheckedDate: '२०२६-०६-०१',
    deadline: '२०२६-०४-२५',
    status: 'Expired',
    officialNoticeUrl: 'https://stateexcise.maharashtra.gov.in',
    isDemo: true,
  },
];

export const whyChooseUsData = [
  {
    title: 'सैन्य व क्रीडा तज्ज्ञ प्रशिक्षक',
    desc: 'माजी सैन्य अधिकारी व राष्ट्रीय धावपटू यांच्याकडून प्रत्येक विद्यार्थ्याच्या वैयक्तिक क्षमतेनुसार शास्त्रोक्त ट्रेनिंग.',
    icon: 'ShieldCheck',
  },
  {
    title: '४०० मीटर मानक ट्रॅक व मैदाने',
    desc: 'पोलीस व सैन्यदलाच्या मूळ मैदानासारखे हुबेहूब वातावरण, ज्यामुळे प्रत्यक्ष भरतीत भीती वाटत नाही.',
    icon: 'Trophy',
  },
  {
    title: 'नियमित OMR आधारित मॉक टेस्ट',
    desc: 'दर आठवड्याला १०० गुणांची परीक्षा व राज्यस्तरीय रँकिंग विश्लेषण, जेणेकरून वेळेचे योग्य नियोजन साधता येते.',
    icon: 'CheckCircle2',
  },
  {
    title: 'सुरक्षित हॉस्टेल व पौष्टिक आहार',
    desc: 'मुला-मुलींसाठी स्वतंत्र हॉस्टेल, २४ तास सुरक्षा आणि धावणाऱ्या खेळाडूंच्या शारीरिक गरजेनुसार प्रथिनयुक्त मेस.',
    icon: 'Home',
  },
];
