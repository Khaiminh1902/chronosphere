import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function OnboardingRoute() {
  return (
    <div className='min-h-screen w-screen flex items-center justify-center'>
        <Card>
            <CardHeader className='gap-2'>
                <CardTitle>Welcome to Chrono<span className='text-primary'>Sphere</span></CardTitle>
                <CardDescription>We need the following information to set up your profile!</CardDescription>
            </CardHeader>
            <form>
                <CardContent className='flex flex-col gap-y-5'>
                    <div className='grid gap-y-2'>
                        <Label>Your Name</Label>
                        <Input placeholder='Enter your name' />
                    </div>
                    <div className='grid gap-y-2'>
                        <Label>Username</Label>
                        <div className='flex rounded-md'>
                            <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground'>ChronoSphere.com/</span>
                            <Input placeholder='Enter your username' className='rounded-l-none' />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className='w-full'>Submit</Button>
                </CardFooter>
            </form>
        </Card>
    </div>
  )
}
