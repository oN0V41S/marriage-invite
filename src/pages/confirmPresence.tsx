'use client';

import styles from "@styles/confirmPresence.module.scss"
import Link from "next/link";
import { useState } from "react";

interface People {
  name: string;
}

export default function ConfirmPresence() {

  const [peoples, setPeoples] = useState<People[]>([{ name: '' }]);

  const addPeople = (item: any) => {
    setPeoples([...peoples, { name:  item.nome}]);
  };

  function sendToWhatsApp() {
    if (peoples.length === 0) {
      alert('Adicione pelo menos um convidado!');
      return;
    }

    const message = `📋 Lista de Convidados de "Rafael Novais":\n${peoples.map((name, index) =>
      `${index + 1}. ${name}`).join('\n')}`;

    const phoneNumber = '5511957637068';
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  }

  return (
    <div className={styles.inviteConfirmationContent}>
      <button onClick={(item)=>{console.log("CC")}} className={styles.defaultButton}>
        Cadastrar Convidados.
      </button>

      <div className={styles.footerButtonGroup}>
        <button onClick={sendToWhatsApp} className={styles.defaultButton}>
          Adicionar via Whatsapp! (ícone)
        </button>
        <Link href={'/invite'} className={`${styles.defaultButton} ${styles.confirmButton}`}>
          Voltar para o convite
        </Link>
      </div>
    </div>
  );
}