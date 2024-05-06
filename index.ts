function generatePassword(length: number): string {
  const charset: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  let password: string = '';
  for (let i: number = 0; i < length; i++) {
      const randomIndex: number = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }

  return password;
}

export default generatePassword;
