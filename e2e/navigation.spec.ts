import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('home shows portal cards and terminal typer', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await expect(page.getByRole('button', { name: /still life/i })).toBeVisible({ timeout: 10000 });
    await expect(page.getByText(/upload-media|media-share/)).toBeVisible({ timeout: 8000 });
  });

  test('navigate to Still Life and see gallery', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /still life/i }).click();
    await expect(page.getByRole('heading', { name: 'Still Life', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Upload Photo' })).toBeVisible();
    await expect(page.locator('img[alt^="Still Life"]').first()).toBeVisible();
  });

  test('navigate to Moving Images and see videos', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /moving images/i }).click();
    await expect(page.getByRole('heading', { name: 'Moving Images', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Upload Video' })).toBeVisible();
    await expect(page.locator('video').first()).toBeVisible();
  });

  test('navigate to Music and see tracks', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /^music$/i }).click();
    await expect(page.getByRole('heading', { name: 'Music', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Upload Audio' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Play' }).first()).toBeVisible();
  });

  test('navigate to About and see bio', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /about/i }).click();
    await expect(page.getByText(/Media Share|platform for sharing/i)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Instagram' })).toBeVisible();
  });

  test('navigate to Portfolio and see experience', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /portfolio/i }).click();
    await expect(page.getByText('Alexander Ames')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();
  });

  test('Back to Home returns from any view', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /still life/i }).click();
    await expect(page.getByRole('heading', { name: 'Still Life', exact: true })).toBeVisible();
    await page.getByRole('button', { name: /back to home/i }).click();
    await expect(page.getByRole('button', { name: /still life/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /back to home/i })).not.toBeVisible();
  });
});
