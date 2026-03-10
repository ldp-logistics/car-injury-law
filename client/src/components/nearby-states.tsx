import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { STATE_DATA } from "@/data/state-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NearbyStatesProps {
  stateKeys: string[];
}

export function NearbyStates({ stateKeys }: NearbyStatesProps) {
  if (!stateKeys || stateKeys.length === 0) return null;

  return (
    <Card className="border-none shadow-md mt-8 overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-slate-100 py-4">
        <CardTitle className="text-base font-bold flex items-center gap-2 text-primary">
          <MapPin className="h-4 w-4 text-secondary" />
          Nearby Locations
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-slate-100">
          {stateKeys.map((key) => {
            const state = STATE_DATA[key];
            if (!state) return null;
            
            return (
              <Link 
                key={key} 
                href={`/${state.slug}`}
                className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors group"
              >
                <div className="flex flex-col">
                  <span className="font-bold text-primary group-hover:text-secondary transition-colors">
                    {state.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Car Accident Lawyers
                  </span>
                </div>
                <span className="text-xs font-bold bg-white border border-slate-200 px-2 py-1 rounded text-slate-500 group-hover:border-secondary group-hover:text-secondary transition-colors">
                  {state.abbr}
                </span>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}