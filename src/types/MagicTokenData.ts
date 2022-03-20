type MagicTokenData = {
  data?: {
    id: string;
    magic_token: string;
    is_disabled: string;
    user_email: string;
    created_at_br: string;
    created_at: Date;
    updated_at: Date;
  };
  error?: string;
  ok?: string;
};

export default MagicTokenData;
