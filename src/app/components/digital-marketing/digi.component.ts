import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'scoss-digi',
  templateUrl: './digi.component.html',
  styleUrl: './digi.component.scss'
})
export class DigiComponent {
dmServices = [
    {
      header: 'Search Engine Optimization (SEO)',
      paragraph: 'Dominate search results and drive qualified organic traffic to your website. Our technical SEO expertise ensures your business stands out in an increasingly competitive digital landscape.'
    },
    {
      header: 'Pay-Per-Click (PPC) Advertising',
      paragraph: 'Launch targeted ad campaigns to generate immediate leads and sales.'
    },
    {
      header: 'Social Media Marketing (SMM)',
      paragraph: 'Build meaningful connections with your audience through strategic social media management and engaging content.'
    },
    {
      header: 'Content Marketing',
      paragraph: 'Create high-quality, engaging content that resonates with your audience.'
    },
    {
      header: 'E-commerce Digital Marketing',
      paragraph: 'Drive more sales with tailored strategies for online stores.'
    },
    {
      header: 'Email Marketing',
      paragraph: 'Boost customer loyalty and conversions through targeted email campaigns.'
    },
    {
      header: 'Web Analytics and Reporting',
      paragraph: 'Track, measure, and improve your digital marketing performance.'
    }
  ];

  dmBenefits = [
    'Data-driven marketing strategies',
    'Customized solutions for your business',
    'Transparent reporting and analytics',
    'Experienced digital marketing specialists',
    'Proven track record of success',
    'Local market expertise in Tumkur'
  ];



}
