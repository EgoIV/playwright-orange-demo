import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as dotenv from 'dotenv';

dotenv.config();

const passLoginData = [
    { username: 'Admin', password: 'admin123', desc: 'valid credentials' },
    { username: 'AdMiN', password: 'admin123', desc: 'sensitivity for username' },
    { username: ' Admin ', password: 'admin123', desc: 'spaces before/after username' }
];

const failLoginData = [
    { username: 'ad1m', password: 'admin123', desc: 'invalid username' },
    { username: 'Admin', password: 'wrongPass', desc: 'invalid password' },
    { username: '', password: '', desc: 'both fields empty' },
    { username: 'Admin', password: '', desc: 'only username filled' },
    { username: '', password: 'admin123', desc: 'only password filled' },
    { username: 'Admin123', password: 'Admin123', desc: 'sensitivity for password' },
    { username: 'Admin123', password: ' dmin123 ', desc: 'spaces before/after password' }
];

for (const data of passLoginData) {
    test(`Login pass in case: ${data.desc}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(data.username, data.password);
        loginPage.assertLoginSuccess;
    });
}

for (const data of failLoginData) {
    test(`Login fail in case: ${data.desc}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(data.username, data.password);
        loginPage.assertLoginFailure;
    });
}

test('Login fail multiple time', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    for (let i = 0; i < 5; i++) {
        await loginPage.login("wronguser", "wrong password");
        loginPage.assertLoginFailure;
    }
});