import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesOffered } from '../../common/models/services-offered';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'scoss-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  servicesData: ServicesOffered[] = [
    {
      title: 'Website Design and Development ',
      iconURL: 'images/services icon/website-development.png',
      description: 'Modern, responsive websites crafted to elevate your digital presence ',
      features: 'Custom design, mobile optimization, SEO-friendly development, E-commerce solutions',
      buttonName: 'Start Your Project',
      routerLink: 'website-development'

    },
    {
      title: 'Digital Marketing Services ',
      iconURL: 'images/services icon/digital-marketing.png',
      description: 'Results-driven digital marketing strategies to boost your online presence and growth ',
      features: 'SEO, social media marketing, PPC campaigns, content marketing',
      buttonName: 'Grow Your Business',
      routerLink: 'digital-marketing'

    },
    {
      title: 'Custom Software Development',
      iconURL: 'images/services icon/custom-software-development.png',
      description: 'Custom software solutions tailored to your business needs',
      features: 'Web, mobile, desktop applications',
      buttonName: 'Learn More',
      routerLink: 'custom-software-development'

    },
    {
      title: 'Cloud Solutions',
      iconURL: 'images/services icon/cloud-solutions.png',
      description: 'Secure and scalable cloud infrastructure services',
      features: 'Migration, optimization, management',
      buttonName: 'Explore Cloud Services',
      routerLink: 'cloud-solutions'

    },
    {
      title: 'Cybersecurity Services',
      iconURL: 'images/services icon/cyber-security.png',
      description: 'Comprehensive security solutions for your digital assets',
      features: 'Assessment, implementation, monitoring',
      buttonName: 'View Security Solutions',
      routerLink: 'cyber-security'

    },
    {
      title: 'IT Consulting',
      iconURL: 'images/services icon/it-consulting.png',
      description: 'Strategic technology consulting for business growth',
      features: 'Digital transformation, IT strategy, roadmap',
      buttonName: 'Get Expert Advice',
      routerLink: 'it-consulting'

    },
    {
      title: 'Network Solutions',
      iconURL: 'images/services icon/netwok-solutions.png',
      description: 'Reliable network infrastructure and management',
      features: 'Design, implementation, support',
      buttonName: 'Discover Networks',
      routerLink: 'it-consulting'

    },
    {
      title: 'Technical Support',
      iconURL: 'images/services icon/technical-support.png',
      description: '24/7 technical support and maintenance services',
      features: 'Issue resolution, maintenance, monitoring',
      buttonName: 'View Support Plans',
      routerLink: 'it-consulting'

    }
  ];


}
