import { Component } from '@angular/core';
import { OurServicesList } from '../../../common/models/our-services-list';


@Component({
  selector: 'scoss-services-section',
  standalone: false,
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  serviceList: OurServicesList[] = [
    {
      id: 1,
      title : 'Website Design and Development ',
      iconURL:'images/gallery/Our-Services/Web-Development.jpg',
      description:' Modern, responsive websites crafted to elevate your digital presence ',
      features:' Key features: Custom design, mobile optimization, SEO-friendly development, E-commerce solutions',
      buttonName:'Start Your Project →'
  
    },
    {
      id: 2,
      title : 'Digital Marketing Services ',
      iconURL:'images/gallery/Our-Services/Digital-Marketing.jpg',
      description:'Results-driven digital marketing strategies to boost your online presence and growth ',
      features:' Key features: SEO, social media marketing, PPC campaigns, content marketing',
      buttonName:'Grow Your Business →'
  
    },
    {
      id: 3,
      title : 'Custom Software Development',
      iconURL:'images/gallery/Our-Services/Custom-Software-Development.webp',
      description:'Custom software solutions tailored to your business needs',
      features:'Key features: Web, mobile, desktop applications',
      buttonName:'Learn More →'
  
    },
    {
      id: 4,
      title : 'Cloud Solutions',
      iconURL:'images/gallery/Our-Services/Cloud-Solutions.jpeg',
      description:'Secure and scalable cloud infrastructure services',
      features:'Key features: Migration, optimization, management',
      buttonName:'Explore Cloud Services →'
  
    },
    {
      id: 5,
      title : 'Cybersecurity Services',
      iconURL:'images/gallery/Our-Services/Cyber-Security.cms',
      description:'Comprehensive security solutions for your digital assets',
      features:'Key features: Assessment, implementation, monitoring',
      buttonName:'View Security Solutions →'
  
    },
    {
      id: 6,
      title : 'IT Consulting',
      iconURL:'images/gallery/Our-Services/IT-Consulting.jpg',
      description:'Strategic technology consulting for business growth',
      features:'Key features: Digital transformation, IT strategy, roadmap',
      buttonName:'Get Expert Advice →'
  
    },
    {
      id: 7,
      title : 'Network Solutions',
      iconURL:'images/gallery/Our-Services/Network-Solutions.jpg',
      description:'Reliable network infrastructure and management',
      features:'Key features: Design, implementation, support',
      buttonName:'Discover Networks →'
  
    },
    {
      id: 8,
      title : 'Technical Support',
      iconURL:'images/gallery/Our-Services/Technical-Support.jpg',
      description:'24/7 technical support and maintenance services',
      features:'Key features: Issue resolution, maintenance, monitoring',
      buttonName:'View Support Plans →'
  
    }
  ];
}
