import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'contacts.json');

async function readContacts() {
  try {
    const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    return [];
  }
}

async function writeContacts(contacts: any[]) {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    await fs.mkdir(dir, { recursive: true });
    
    await fs.writeFile(
      DATA_FILE_PATH,
      JSON.stringify(contacts, null, 2),
      { 
        encoding: 'utf-8',
        mode: 0o666
      }
    );
  } catch (error) {
    console.error('Error writing to file:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const newContact = {
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };

    try {
      const contacts = await readContacts();
      
      contacts.push(newContact);

      await writeContacts(contacts);
      console.log('Contact saved successfully:', newContact);

      return NextResponse.json({ 
        success: true,
        message: 'Contact information received and saved',
        contact: newContact
      });

    } catch (writeError) {
      console.error('Error saving contact:', writeError);
      return NextResponse.json({ 
        success: true,
        message: 'Contact information received but not saved',
        contact: newContact,
        warning: 'Data was not persisted due to a storage error'
      });
    }

  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process contact',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 