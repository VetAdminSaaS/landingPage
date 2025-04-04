import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/component/footer/footer.component";
import { NavbarComponent } from "../../shared/component/navbar/navbar.component";
import { FaqItem } from '../../shared/model/faq.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  faqItems: FaqItem[] = [
    {
      question: '¿Cómo programo una demo personalizada?',
      answer: 'Puedes solicitar una demo completando nuestro formulario de contacto o llamando directamente a nuestro número de atención. Te asignaremos un especialista que se adaptará a tus horarios.',
      isOpen: false
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos todas las tarjetas de crédito y débito principales, transferencias bancarias y PayPal. También ofrecemos facturación para empresas.',
      isOpen: false
    },
    {
      question: '¿Ofrecen soporte técnico 24/7?',
      answer: 'El soporte 24/7 está disponible para los planes Empresa. Para otros planes, ofrecemos soporte prioritario en horario comercial con tiempos de respuesta garantizados.',
      isOpen: false
    },
    {
      question: '¿Puedo cancelar mi suscripción en cualquier momento?',
      answer: 'Sí, puedes cancelar tu suscripción en cualquier momento. No hay contratos a largo plazo y no cobramos tarifas de cancelación anticipada.',
      isOpen: false
    },
    {
      question: '¿Cómo se manejan los datos de mis pacientes?',
      answer: 'Nos tomamos muy en serio la privacidad de los datos. Todos los datos se almacenan de forma segura y cumplen con las normativas de protección de datos. Puedes consultar nuestra política de privacidad para más detalles.',
      isOpen: false
    },
    {
      question: '¿Puedo integrar el software con otras herramientas que uso?',
      answer: 'Sí, nuestro software se integra fácilmente con una variedad de herramientas y plataformas populares. Ofrecemos API y documentación para facilitar la integración.',
      isOpen: false
    },
    {
      question: '¿Qué tipo de formación ofrecen para nuevos usuarios?',
      answer: 'Ofrecemos formación en línea y recursos de autoayuda para nuevos usuarios. También puedes solicitar sesiones de formación personalizadas si lo prefieres.',  
      isOpen: false
    }
  ];

  toggleFaqItem(item: FaqItem): void {
  
    this.faqItems.forEach(i => {
      if (i !== item) {
        i.isOpen = false;
      }
    });
    

    item.isOpen = !item.isOpen;
  }
}


