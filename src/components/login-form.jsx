import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  values ,
  errors ,
  touched ,
  handleChange ,
  handleBlur ,
  handleSubmit , 
  isSubmitting , 
  ...props
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your Acme Inc account
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="name"
                  type="name"
                  placeholder="name" 
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  
                />
                <p className="text-red-500">
                 {errors.name && touched.name && errors.name}
                </p>
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  
                </div>
                <Input 
                  id="password" 
                  type="password"
                  name="password" 
                   placeholder="........." 
                  value={values.password} 
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                  <p className="text-red-500">{errors.password && touched.password && errors.password}</p>
              </Field>
              <Field>
                <Button type="submit" disabled={isSubmitting}>Login</Button>
              </Field>
              
              
            </FieldGroup>
          </form>
          <div className="relative hidden bg-muted md:block gradient-background">
            {/* <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            /> */}
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
