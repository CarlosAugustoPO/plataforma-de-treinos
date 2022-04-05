import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import SendIcon from '@mui/icons-material/SendSharp';

export default function LinkButton(props: {
  href: any;
  cta: string;
}) {
  const router = useRouter();
  return (
    <Button
      variant="outlined"
      color="sendButton"
      onClick={() => router.push(props.href)}
      endIcon={<SendIcon sx={{ marginTop: '-2.5px' }} />}
    >
      {props.cta}
    </Button>
  );
}
