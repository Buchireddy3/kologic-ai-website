/*
  # Create website content table for chatbot knowledge base

  1. New Tables
    - `website_content`
      - `id` (uuid, primary key)
      - `page` (text) - The page name (home, about, services, solutions, contact)
      - `section` (text) - The section name
      - `content` (text) - The actual content
      - `keywords` (text[]) - Keywords for search
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `website_content` table
    - Add policy for public read access (chatbot needs to read this data)
*/

CREATE TABLE IF NOT EXISTS website_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page text NOT NULL,
  section text NOT NULL,
  content text NOT NULL,
  keywords text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE website_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read website content"
  ON website_content
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Only authenticated users can insert website content"
  ON website_content
  FOR INSERT
  TO authenticated
  WITH CHECK (true);
