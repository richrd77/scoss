import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  schemaType?: "WebPage" | "Service" | "AboutPage" | "ContactPage" | "CollectionPage";
  serviceName?: string;
}

const SITE_URL = "https://scossservices.com";
const ORG_NAME = "SCOSS Services";

export const SEOHead = ({
  title,
  description,
  breadcrumbs,
  schemaType = "WebPage",
  serviceName,
}: SEOHeadProps) => {
  const location = useLocation();
  const canonicalUrl = `${SITE_URL}${location.pathname}`;

  useEffect(() => {
    // Title
    document.title = title;

    // Meta tags
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:title", title, "name");
    setMeta("twitter:description", description, "name");

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // JSON-LD schemas
    const existingScripts = document.querySelectorAll('script[data-seo="true"]');
    existingScripts.forEach((s) => s.remove());

    const schemas: object[] = [];

    // Organization schema (always)
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9113030506",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Kannada", "Hindi"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tumkur",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/scossservices",
        "https://www.linkedin.com/company/scossservices",
        "https://www.instagram.com/scossservices",
      ],
    });

    // WebSite schema (homepage only)
    if (location.pathname === "/") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: ORG_NAME,
        url: SITE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/services?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      });
    }

    // Breadcrumb schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}${item.href}`,
        })),
      });
    }

    // Service schema
    if (schemaType === "Service" && serviceName) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: serviceName,
        provider: {
          "@type": "Organization",
          name: ORG_NAME,
          url: SITE_URL,
        },
        areaServed: {
          "@type": "Place",
          name: "Tumkur, Karnataka, India",
        },
      });
    }

    // Page type schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": schemaType === "Service" ? "WebPage" : schemaType,
      name: title,
      description: description,
      url: canonicalUrl,
      isPartOf: { "@type": "WebSite", url: SITE_URL },
    });

    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[data-seo="true"]');
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, canonicalUrl, breadcrumbs, schemaType, serviceName, location.pathname]);

  return null;
};
