import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { Button, TextField } from '@mui/material';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" fullWidth>
        Login
      </Button>
    </form>
  );
}
export default LoginForm;