import { Exercise } from "src/models/exercise.model";
import { Subject } from "rxjs";
import { DateTime } from 'luxon';

export class TrainingService {
    exerciseChanged = new Subject<Exercise | null>();
    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];

    private dummyCompletedExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 12, calories: 8, state:'cancelled', date: new Date()},
        { id: 'touch-toes', name: 'Touch Toes', duration: 12, calories: 4, state:'cancelled', date: new Date() },
        { id: 'side-lunges', name: 'Side Lunges', duration: 12, calories: 6, state:'cancelled', date: new Date() },
        { id: 'burpees', name: 'Burpees', duration: 12, calories: 8, state:'cancelled', date: new Date() },
        { id: 'crunches', name: 'Crunches', duration: 12, calories: 8, state:'cancelled', date: new Date()},
        { id: 'touch-toes', name: 'Touch Toes', duration: 12, calories: 4, state:'cancelled', date: new Date() },
        { id: 'side-lunges', name: 'Side Lunges', duration: 12, calories: 6, state:'cancelled', date: new Date() },
        { id: 'burpees', name: 'Burpees', duration: 12, calories: 8, state:'cancelled', date: new Date() },
        { id: 'crunches', name: 'Crunches', duration: 12, calories: 8, state:'cancelled', date: new Date()},
        { id: 'touch-toes', name: 'Touch Toes', duration: 12, calories: 4, state:'cancelled', date: new Date() },
        { id: 'side-lunges', name: 'Side Lunges', duration: 12, calories: 6, state:'cancelled', date: new Date() },
        { id: 'burpees', name: 'Burpees', duration: 12, calories: 8, state:'cancelled', date: new Date() },
        { id: 'crunches', name: 'Crunches', duration: 12, calories: 8, state:'cancelled', date: new Date()},
        { id: 'touch-toes', name: 'Touch Toes', duration: 12, calories: 4, state:'cancelled', date: new Date() },
        { id: 'side-lunges', name: 'Side Lunges', duration: 12, calories: 6, state:'cancelled', date: new Date() },
        { id: 'burpees', name: 'Burpees', duration: 12, calories: 8, state:'cancelled', date: new Date() },
        { id: 'crunches', name: 'Crunches', duration: 12, calories: 8, state:'cancelled', date: new Date()},
        { id: 'touch-toes', name: 'Touch Toes', duration: 12, calories: 4, state:'cancelled', date: new Date() },
        { id: 'side-lunges', name: 'Side Lunges', duration: 12, calories: 6, state:'cancelled', date: new Date() },
        { id: 'burpees', name: 'Burpees', duration: 12, calories: 8, state:'cancelled', date: new Date() },
        { id: 'crunches', name: 'Crunches', duration: 12, calories: 8, state:'cancelled', date: new Date()},
        { id: 'touch-toes', name: 'Touch Toes', duration: 12, calories: 4, state:'cancelled', date: new Date() },
        { id: 'side-lunges', name: 'Side Lunges', duration: 12, calories: 6, state:'cancelled', date: new Date() },
        { id: 'burpees', name: 'Burpees', duration: 12, calories: 8, state:'cancelled', date: new Date() },
    ]

    private runningExercise?: Exercise;
    private completedExercises: Exercise[] = this.dummyCompletedExercises;

    constructor() {}

    getAvailableExercises(){
        return this.availableExercises.slice();
    }
    getRunningExercise(): Exercise | undefined {
        if(this.runningExercise){
            return {...this.runningExercise}
        }else{
            return undefined;
        }
    }

    getCompletedExercises(): Exercise[]{
        return [...this.completedExercises];
    }

    getDummyExercises(): Exercise[]{
        return [...this.dummyCompletedExercises];
    }

    startExercise(selectedId: string){
        this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
        if (!this.runningExercise) return;
        this.exerciseChanged.next({...this.runningExercise});
    }

    clear(){
        delete this.runningExercise;
        this.exerciseChanged.next(null);
    }

    completeExercise(){
        this.completedExercises.push({
            ...this.runningExercise as Exercise, 
            date: new Date(),
            state: 'completed'
        });
        this.clear();
    }

    cancelExercise(progress: number){
        this.completedExercises.push({
            ...this.runningExercise as Exercise, 
            duration: Math.floor((this.runningExercise as Exercise).duration * (progress / 100)),
            calories: Math.floor((this.runningExercise as Exercise).calories * (progress / 100)),
            date: new Date(),
            state: 'cancelled'
        });
        this.clear();
    }

    
}