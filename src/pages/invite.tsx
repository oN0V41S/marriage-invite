import Image from "next/image";
import InviteImg from "../../public/inviteEx01.png" 
import styles from "@styles/invite.module.scss"
import Link from "next/link";

export default function Invite () {
    return (
        <>
            <Image src={InviteImg} alt="Convite" className={styles.img}/>
            <Link href={"/confirmPresence"} className={styles.confirmPresenceButton}>Clique aqui para confirmar sua presença!!</Link>
        </>
    )
}