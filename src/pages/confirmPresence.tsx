'use client';

import styles from "@styles/confirmPresence.module.scss"
import { useState } from "react";

interface People {
    name: string;
  }

export default function ConfirmPresence() {
    const [peoples, setPeoples] = useState<People[]>([{ name: ''}]);

    const addPeople = () => {
      setPeoples([...peoples, { name: ''}]);
    };
  
    const removerPessoa = (index: number) => {
      const novasPessoas = peoples.filter((_, i) => i !== index);
      setPeoples(novasPessoas);
    };
  
    const handleSubmit = async (formData: FormData) => {
      const dadosCompletos = peoples.map((peoples, index) => ({
        nome: formData.get(`name-${index}`) as string,
        email: formData.get(`email-${index}`) as string,
      }));
  
      // Envio para API
      try {
        const response = await fetch('/api/cadastro', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dadosCompletos),
        });
  
        if (response.ok) {
          alert('Cadastro realizado com sucesso!');
          setPeoples([{ name: '', email: '' }]);
        }
      } catch (error) {
        console.error('Erro no cadastro:', error);
      }
    };
  
    const consoleSubmit = (item: any) => {
      return console.log(item)
    }

    return (
      <form action={consoleSubmit} className={styles.formContainer}>
        {peoples.map((peoples, index) => (
          <div key={index} className={styles.pessoaContainer}>
            <input
              name={`nome-${index}`}
              placeholder="Nome completo"
              required
              className={styles.inputField}
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => removerPessoa(index)}
                className={styles.removeButton}
              >
                Remover
              </button>
            )}
          </div>
        ))}
  
        <div className={styles.buttonGroup}>
          <button
            type="button"
            onClick={addPeople}
            className={styles.addButton}
          >
            Adicionar Pessoa
          </button>
          
          <button type="submit" className={styles.submitButton}>
            Cadastrar
          </button>
        </div>
      </form>
    );
}