import { Component } from '@angular/core';

@Component({
  selector: 'scoss-itinfrastructureservices',
  templateUrl: './itinfrastructureservices.component.html',
  styleUrl: './itinfrastructureservices.component.scss'
})
export class ItinfrastructureservicesComponent {
infrastructureServices = [
    {
      header: 'Managed IT Services',
      paragraph: '24/7 monitoring, maintenance, and support for your IT systems.'
    },
    {
      header: 'Cloud Computing Solutions',
      paragraph: 'Scalable and cost-effective cloud infrastructure for businesses.'
    },
    {
      header: 'Network & Security Services',
      paragraph: 'Secure, high-performance networks with firewall and endpoint protection.'
    },
    {
      header: 'Server & Storage Management',
      paragraph: 'Reliable server deployment, maintenance, and data backup solutions.'
    },
    {
      header: 'Enterprise IT Support',
      paragraph: 'Custom IT support packages tailored to your business requirements.'
    },
    {
      header: 'Hardware and Software Procurement',
      paragraph: 'Assisting clients in acquiring the right technology tools.'
    },
    {
      header: 'IoT and Smart Infrastructure',
      paragraph: 'IoT device setup and integration.'
    }
  ];

  infrastructureBenefits = [
    'Improves business efficiency & productivity',
    'Reduces downtime and enhances security',
    'Scalable solutions for business growth',
    'Future-proof technology investments',
    '24/7 monitoring and proactive maintenance',
    'Cost optimization through efficient solutions'
  ];
}
