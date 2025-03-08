// // 'use client';

// import styles from "@styles/confirmPresence.module.scss"
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import WhatsappLogo from "@public/icons/whatsappLogo.png"

// interface People {
//   name: string;
// }

// export default function ConfirmPresence() {
//   const [guestRegister, setGuestRegister] = useState("");
//   const [peoples, setPeoples] = useState<People[]>([]);

//   useEffect(() => {
//     console.log(`Peoples Array \n`, peoples)
//   }, [peoples])

//   const addPeople = () => {
//     console.log(`Guest Registrated \n${guestRegister}`)
//     setPeoples([...peoples, { name: guestRegister }]);
//     setGuestRegister("");
//   };

//   function sendToWhatsApp() {
//     const message = `Olá casal!!, Gostaria de Confirmar minha Presença e da minha família.`;
//     const phoneNumber = '5511957317836';
//     const encodedMessage = encodeURIComponent(message);
//     window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
//   }

//   return (
//     <div className={styles.inviteConfirmationContent}>
//       <h1 className={styles.h1}>Confirmação de Presença.</h1>
//       <form onSubmit={addPeople} className={styles.guestForm}>
//         <p className={styles.p}>Adicione o nome Abaixo e clique no botão verde para adicionar convidados que estarão presentes com você.</p>
//         <input
//           type="text"
//           placeholder="Insira o nome do Convidado"
//           className={styles.inputField}
//           onChange={(index: any) => { setGuestRegister(index.target.value) }}
//         />
//         <button type="button" onClick={addPeople} className={`${styles.defaultButton} ${styles.confirmButton}`}>+</button>
//       </form>

//       <div className={styles.footerButtonGroup}>
//         <button onClick={sendToWhatsApp} className={`${styles.defaultButton} ${styles.confirmButton}`}>
//           Adicionar via Whatsapp!
//           <Image src={WhatsappLogo} alt="Whatsapp Logo" width={24} height={24}/>
//         </button>
//         <Link href={'/invite'} className={styles.linkNavigator}>
//           Voltar para o convite
//         </Link>
//       </div>
//     </div>
//   );
// }

// // const Table = (children: any) => { return <table className={styles.table}>{children}</table>}
// // const TableHeader = (children: any) => { return <thead className={styles.tableHeader}>{children}</thead> }
// // const TableBody = (children: any) => { return <tbody className={styles.tableBody}>{children}</tbody> }
// // const TableLine = ({children, dataKey}: {children?: React.ReactNode, dataKey?: any}) => { return <tr key={dataKey} className={styles.tableLine}>{children}</tr> }
// // const TableData = (children: any) => { return <td className={styles.tableData}>{children}</td> }