import React from 'react'
import Image from 'next/image'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { Atom, AudioLines, Cpu, Globe, Mic, Paperclip, Search, SearchCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
export default function ChatInput() {
  return (
    <div className='flex flex-col h-screen items-center justify-center w-full'>
      <Image src={'/logo.png'} alt='logo'width={260} height={260} />
      <div className='p-2 w-full max-w-2xl border rounded-2xl mt-10'>
        <div className='flex justify-between items-end '>
          <Tabs defaultValue='search' className='w-[400px]'>
            <TabsContent value='search'>
            <input type="text" placeholder='Ask anything' className='w-full p-4 outline-none'/>
            </TabsContent>
            <TabsContent value='research'>
            <input type="text" placeholder='Research Anything' className='w-full p-4 outline-none'/>
            </TabsContent>
            <TabsList>
              <TabsTrigger value='search' className='text-primary'><SearchCheck/>Search</TabsTrigger>
              <TabsTrigger value='research' className='text-primary'><Atom/>Research</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className='flex gap-4 items-center'>
            <Cpu className='text-gray-500 h-5 w-5'/>
            <Globe className='text-gray-500 h-5 w-5'/>
            <Paperclip className='text-gray-500 h-5 w-5' />
            <Mic className='text-gray-500 h-5 w-5' />
            <Button>
            <AudioLines className='text-white h-5 w-5' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
