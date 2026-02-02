import { test, expect } from '@playwright/test';

test.describe('Enjoy the app', () => {
  test('Still Life gallery shows images in columns', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /still life/i }).click();
    const images = page.locator('img[alt^="Still Life"]');
    await expect(images.first()).toBeVisible();
    await expect(images).toHaveCount(9);
  });

  test('Moving Images shows video cards with titles', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /moving images/i }).click();
    await expect(page.getByText('Moving Image 1')).toBeVisible();
    await expect(page.locator('video').first()).toBeVisible();
  });

  test('Music track play expands audio controls', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /^music$/i }).click();
    const firstPlay = page.getByRole('button', { name: 'Play' }).first();
    await firstPlay.click();
    await expect(page.locator('audio').first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Pause' }).first()).toBeVisible();
  });

  test('Portfolio shows experience and skills', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /portfolio/i }).click();
    await expect(page.getByText('Caris Life Sciences')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
  });

  test('About shows features and connect links', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /about/i }).click();
    await expect(page.getByRole('heading', { name: 'Features' })).toBeVisible();
    await expect(page.getByText(/Upload and share still-life/i)).toBeVisible();
    await expect(page.getByRole('link', { name: 'GitHub' })).toBeVisible();
  });
});
