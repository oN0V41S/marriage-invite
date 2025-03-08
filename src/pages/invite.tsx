import Image from "next/image";
import InviteImg from "../../public/inviteEx01.png" 
import styles from "@/styles/invite.module.scss"

export default function Invite () {
    return (
        <Image src={InviteImg} alt="Convite" className={styles.img}/>
    )
}