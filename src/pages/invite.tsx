import styles from "@styles/invite.module.scss"
import InviteImg from "@public/invites/inviteEx01.png"
import WhatsappLogo from "@public/icons/whatsappLogo.png"

import Image from "next/image";
// import Link from "next/link";

export default function Invite() {
    function sendToWhatsApp() {
        const message = `Olá casal!!, Gostaria de Confirmar minha Presença e da minha família.`;
        const phoneNumber = '5511957317836';
        const encodedMessage = encodeURIComponent(message);

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    }

    return (
        <main className={styles.inviteContent}>
            <Image src={InviteImg} alt="Convite" className={styles.img} />
            <button onClick={sendToWhatsApp} className={`${styles.defaultButton} ${styles.confirmButton}`}>
                Adicionar via Whatsapp!
                <Image src={WhatsappLogo} alt="Whatsapp Logo" width={24} height={24} />
            </button>
        </main>
    )
}