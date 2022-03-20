type VisitData = {
  data?: {
    ipv4: string;
    visit_id: string;
    visited_domain: string;
    protocol: string;
    data_hora: string;
    visited_url: string;
    visited_page_path: string;
    user_agent: string;
    vercel_id: string;
    forwarded_ipv4: string;
    deploy_url: string;
    ip_city: string;
    ip_country: string;
    created_at_br: string;
    created_at: string;
    updated_at: string;
  };
  ok?: string;
  error?: string;
};

export default VisitData;
