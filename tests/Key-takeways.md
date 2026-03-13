## Locator

**1. Lấy theo Role**\
page.getByRole('button', { name: 'Login' });\
page.getByRole('textbox', { name: 'Email' });\
page.getByRole('heading', { name: 'Welcome' });\
**2. Lấy theo text**\
page.getByText('Submit');\
page.getByText('Forgot password');\
page.getByText('Save', { exact: true });\
**3. Lấy theo Label**\
- page.getByLabel('Username');''
- page.getByLabel('Password');

**4. Lấy theo Placeholder**
- page.getByPlaceholder('Enter your email');

**5. Lấy theo Test ID**
- <button data-testid="login-btn">Login</button>
- page.getByTestId('login-btn');

**6. Lấy theo CSS Selector**
- Dùng khi không có role / text / testid.
- page.locator('#username');
- page.locator('.btn-primary');
- page.locator('input[name="email"]');
- page.locator('.form').locator('input').first();
**7. Lấy theo XPath (⚠️ chỉ dùng khi bất khả kháng)**
- page.locator('//button[text()="Login"]');
- page.locator('//input[@type="password"]');

## Git 
- git branch
- git checkout
- Checkout ra branch mới: git checkout -b <ten branch moi>
-  Đẩy file lên nhánh : git add .
- Commit file vào nhánh : git commit -m "Add test file for login feature
- Đẩy code từ branch lên git: git push origin <tên branch>
- Lấy 1 branch từ git về: git fetch origin <ten branch>
- Git: remote
- tóm lại quy trình 
- git checkout feature/login
- git add .
- git commit -m "Add new file"
- ggit push origin feature/login
---
