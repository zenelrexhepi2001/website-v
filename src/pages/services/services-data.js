import voltoxPay from '../../assets/images/voltox-client.png';
import Image1 from '../../assets/images/men-working-pc.png';
import girlWatchphone from '../../assets/images/girl-phone.png';
import scanCode from '../../assets/images/scan-phone.png';

const ServicesData = [
    {
        id: 1,
        getServicesData: [
            {
                title: 'Login & Checkout',
                content: 'Instead of having to write down all of \n' +
                    'your credentials time after time, using \n' +
                    'updated technology, you can scan your \n' +
                    'face both at the beginning and at the \n' +
                    'end. With the help of our facial \n' +
                    'recognition system, you save time while \n' +
                    'finishing up these time-consuming \n' +
                    'tasks in a safe and easy way, giving you \n' +
                    'a pleasant experience. All you have to \n' +
                    'do is smile twice- once at the login part \n' +
                    'and once at the checkout one.',
                img: voltoxPay,
                id: 1,
            },
            {
                title: 'Scan & Go',
                img: Image1,
                content: 'This feature can be used at the POS. \n' +
                    'Instead of waiting in line to scan your \n' +
                    'own items at the shops or have them \n' +
                    'scanned for you, you can do that \n' +
                    'yourself. Using Voltox, you scan your \n' +
                    'items, then pay by scanning your face \n' +
                    'at the check-out of the store, and then \n' +
                    'you are good to go. Many actions \n' +
                    'finished in not much time.',
                id: 2,
                rowR: 'row',
            },
            {
                title: 'eKYC service',
                content: 'Voltox also provides the Ekyc service. Thanks to the onboarding deep OCR/MRZ/ML and biometric facial recognition that we use, that gives us the ability to register our users and scan their ID and credit card. By providing these services, we also provide trust, compliance and security for all of our users. Our company is suitable for every individual and any organization that wants to have a fast and simple user experience.',
                img: girlWatchphone,
                id: 3,
            },

            {
                title: 'Voltox QR code',
                content: 'With the help of the Voltox QR Code, the procedure can be simplified for you even more. When you scan the QR Code with your smartphone, three options are shown on the screen. You can pick one of these three alternatives, all of which offer different services for you. One makes it possible for you to login, the other one gives you the option to finish your payment and the last one helps you Scan & Go.',
                img: scanCode,
                id: 4,
                rowR: 'row',
            },
        ]
    }
]

export default ServicesData;