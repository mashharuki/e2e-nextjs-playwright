import { expect, test } from '@playwright/test'

/**
 * e2e テストの設定
 * デフォルトページのテストファイル Hello World の表示を確認する
 */
test('Shall render hello world', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('e2e lesson')
  await expect(page.getByRole('heading')).toHaveText('Hello World🚀')
})
