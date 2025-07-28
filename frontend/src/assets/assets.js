import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.jpg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Aravind Kumar',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Vassol Raja is dedicated to providing holistic healthcare with a focus on preventive medicine and patient well-being.',
        fees: 50,
        address: {
            line1: '17th Cross, T. Nagar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Meena Lakshmi',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Naai Shekar specializes in women’s health and is committed to compassionate patient care.',
        fees: 60,
        address: {
            line1: '27th Cross, Anna Nagar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Priya Subramanian',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Kaipulla is passionate about skin health and offers advanced dermatological care.',
        fees: 30,
        address: {
            line1: '37th Cross, Adyar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Karthik Raj',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Encounter Ekambaram is dedicated to the health and wellness of children, providing expert pediatric care.',
        fees: 40,
        address: {
            line1: '47th Cross, Velachery',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Anitha Suresh',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Otteri Nari is an expert in neurology, focusing on patient-centered neurological care.',
        fees: 50,
        address: {
            line1: '57th Cross, Mylapore',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Siva Shankar',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Body Soda provides comprehensive neurological services with a focus on patient education.',
        fees: 50,
        address: {
            line1: '57th Cross, Mylapore',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Lakshmi Narayanan',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Azhagesan is committed to providing quality primary care and preventive health services.',
        fees: 50,
        address: {
            line1: '17th Cross, T. Nagar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Kavitha Ramesh',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Marudhu Singam is a caring gynecologist with expertise in women’s reproductive health.',
        fees: 60,
        address: {
            line1: '27th Cross, Anna Nagar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Shalini Venkatesh',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Style Pandi offers advanced dermatology treatments with a patient-first approach.',
        fees: 30,
        address: {
            line1: '37th Cross, Adyar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Revathi Balaji',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Lollu Sabha is passionate about child health and development, providing expert pediatric care.',
        fees: 40,
        address: {
            line1: '47th Cross, Velachery',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Rajesh Kumar',
        image: doc11,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Pulikesi specializes in digestive health and offers expert gastroenterology care.',
        fees: 50,
        address: {
            line1: '57th Cross, Mylapore',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Prakash Chandran',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Prakash Chandran is a neurologist dedicated to providing advanced neurological care.',
        fees: 50,
        address: {
            line1: '57th Cross, Mylapore',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Gayathri Raman',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gayathri Raman is committed to holistic patient care and preventive medicine.',
        fees: 50,
        address: {
            line1: '17th Cross, T. Nagar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Senthil Kumar',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Senthil Kumar is an experienced gynecologist dedicated to women’s health and wellness.',
        fees: 60,
        address: {
            line1: '27th Cross, Anna Nagar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Nithya Manivannan',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Vadivu provides expert dermatological care with a focus on patient satisfaction.',
        fees: 30,
        address: {
            line1: '37th Cross, Adyar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
]