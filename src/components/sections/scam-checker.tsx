'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { checkScam, ScamCheckState } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Bot, Loader2, Siren, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

const initialState: ScamCheckState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full sm:w-auto" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
      Analyze Message
    </Button>
  );
}

export function ScamChecker() {
  const [state, formAction] = useActionState(checkScam, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.result) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
    if (state.result) {
      formRef.current?.reset();
    }
  }, [state, toast]);


  return (
    <Card id="scam-checker" className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <Siren className="h-6 w-6 text-destructive" />
          AI-Powered Scam Detector
        </CardTitle>
        <CardDescription>
          Received a suspicious message about Aadhaar or DBT? Paste it below and let our AI analyze it for potential threats.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form ref={formRef} action={formAction} className="space-y-4">
          <Textarea
            name="message"
            placeholder="e.g., 'Your Aadhaar is linked to a lottery prize! Click here to claim...'"
            rows={5}
            required
            className="text-base"
          />
          {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
          <SubmitButton />
        </form>

        {state.result && (
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-semibold">Analysis Result:</h3>
            {state.result.isScam ? (
              <Alert variant="destructive">
                <Siren className="h-4 w-4" />
                <AlertTitle>Warning: Likely a Scam!</AlertTitle>
                <AlertDescription className="space-y-2">
                  <p><strong>Explanation:</strong> {state.result.explanation}</p>
                  <p><strong>Advice:</strong> {state.result.advice}</p>
                </AlertDescription>
              </Alert>
            ) : (
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Analysis: Likely Safe</AlertTitle>
                <AlertDescription className="space-y-2">
                  <p><strong>Explanation:</strong> {state.result.explanation}</p>
                  <p><strong>Advice:</strong> {state.result.advice}</p>
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
