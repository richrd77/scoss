import { Component } from '@angular/core';

@Component({
  selector: 'scoss-webdesignservices',
  templateUrl: './webdesignservices.component.html',
  styleUrl: './webdesignservices.component.scss'
})
export class WebdesignservicesComponent {
  webServices: any[] = [
    {
      header: 'Custom Website Design',
      paragraph: 'Unique and engaging designs that reflect your brand.'
    },
    {
      header: 'E-Commerce Website Development',
      paragraph: 'Build online stores with seamless shopping experiences.'
    },
    {
      header: 'CMS-Based Websites',
      paragraph: 'Easy-to-manage websites using WordPress, Joomla, etc.'
    },
    {
      header: 'Website Redesign',
      paragraph: 'Upgrade outdated websites for modern appeal and functionality'
    },
    {
      header: 'Maintenance and Support',
      paragraph: 'Keep your site updated and secure with ongoing support.'
    }
  ];

  websitesApart: any[] = [
    {
      header: 'Custom Design',
      paragraph: 'Websites tailored to your brand and business needs'
    },
    {
      header: 'Mobile Optimization',
      paragraph: 'Responsive design for seamless access across devices.'
    },
    {
      header: 'Speed and Performance',
      paragraph: 'Fast-loading websites for better user engagement.'
    },
    {
      header: 'Scalable Solutions',
      paragraph: 'Build a site that grows with your business.'
    }
  ];
}
