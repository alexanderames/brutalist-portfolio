import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Upload', () => {
  test('click terminal opens upload modal with section choices', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /upload-media|click to upload/i }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText('Upload Media')).toBeVisible();
    await expect(page.getByRole('button', { name: /upload photo.*still life/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /upload video.*moving images/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /upload audio.*music/i })).toBeVisible();
  });

  test('upload modal choice navigates to Still Life', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /upload-media|click to upload/i }).click();
    await page.getByRole('button', { name: /upload photo.*still life/i }).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Still Life', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Upload Photo' })).toBeVisible();
  });

  test('upload modal choice navigates to Moving Images', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /upload-media|click to upload/i }).click();
    await page.getByRole('button', { name: /upload video.*moving images/i }).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Moving Images', exact: true })).toBeVisible();
  });

  test('upload modal choice navigates to Music', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /upload-media|click to upload/i }).click();
    await page.getByRole('button', { name: /upload audio.*music/i }).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Music', exact: true })).toBeVisible();
  });

  test('Still Life file upload adds image to gallery', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /still life/i }).click();
    const initialImages = await page.locator('img[alt^="Still Life"]').count();

    const testImagePath = path.join(__dirname, 'fixtures', 'test-image.png');
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(testImagePath);

    await expect(page.locator('img[alt^="Still Life"]')).toHaveCount(initialImages + 1, { timeout: 3000 });
  });
});
