import { expect, test } from '@playwright/test'

/**
 * ユーザー情報の表示に関するE2Eテスト
 */
test('Shall github username not visible without session token', async ({
  page,
  context,
}) => {
  // クッキーをクリアしてログアウトしている状態にする
  await context.clearCookies()
  await page.goto('/')
  await expect(page.getByRole('heading')).toHaveText('Hello World🚀')
  await expect(page.getByText('userA')).not.toBeVisible()
})

test('Shall github username visible with session token', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading')).toHaveText('Hello World🚀')
  await expect(page.getByText('userA')).toBeVisible()
})
