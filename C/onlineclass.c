#include <stdio.h>
//ABSTRACT COURSE
   typedef struct Course {
    void (*start)(struct Course *);
    void (*evaluate)(struct Course *);
} Course;

typedef struct {
    Course base;
} VideoCourse;

void startVideo(Course *c) {
    printf("Video course started\n");
}

void evaluateVideo(Course *c) {
    printf("Video course evaluated\n");
}

typedef struct {
    Course base;
} LiveCourse;

void startLive(Course *c) {
    printf("Live class started\n");
}

void evaluateLive(Course *c) {
    printf("Live class evaluated\n");
}
void manageCourse(Course *course) {
    course->start(course);
    course->evaluate(course);
}

int main() {

    VideoCourse video = {
        .base = { startVideo, evaluateVideo }
    };

    LiveCourse live = {
        .base = { startLive, evaluateLive }
    };

    manageCourse((Course *)&video);
    manageCourse((Course *)&live);

    return 0;
}
