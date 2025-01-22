"use client"

import { motion } from "framer-motion"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

/**
 * ScheduleFilters
 */
export function ScheduleFilters({
  day,
  daysOfWeek,
  setDay,
  courses,
  course,
  handleCourseChange,
  semestersForCourse,
  semester,
  handleSemesterChange,
  phasesForCourseSem,
  phase,
  handlePhaseChange,
  batchesForCourseSemPhase,
  batch,
  handleBatchChange,
  filtersOpen,
  setFiltersOpen,
}) {
  return (
    <div className="bg-background/80 backdrop-blur-sm mb-4">
      {/* Top bar with selected day/batch and the "Filters" toggle button */}
      <div className="flex items-center pl-[10px] justify-between mb-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="font-medium">{day}</span>
          {batch && (
            <>
              <span>•</span>
              <span className="font-medium">{batch.toUpperCase()}</span>
            </>
          )}
        </div>
        <Button variant="outline" onClick={() => setFiltersOpen(!filtersOpen)}>
          {filtersOpen ? "Hide Filters" : "Filters"}
        </Button>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: filtersOpen ? "auto" : 0,
          opacity: filtersOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-2 gap-4 pb-4">
          {/* Day Select */}
          <div className="flex items-center gap-2">
            <span className="w-24 text-right">Day:</span>
            <Select value={day} onValueChange={setDay}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select day" />
              </SelectTrigger>
              <SelectContent>
                {daysOfWeek.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Course */}
          <div className="flex items-center gap-2">
            <span className="w-24 text-right">Course:</span>
            <Select
              value={course}
              onValueChange={handleCourseChange}
              disabled={courses.length === 0}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Semester */}
          <div className="flex items-center gap-2">
            <span className="w-24 text-right">Semester:</span>
            <Select
              value={semester}
              onValueChange={handleSemesterChange}
              disabled={semestersForCourse.length === 0}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                {semestersForCourse.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Phase */}
          <div className="flex items-center gap-2">
            <span className="w-24 text-right">Phase:</span>
            <Select
              value={phase}
              onValueChange={handlePhaseChange}
              disabled={phasesForCourseSem.length === 0}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select phase" />
              </SelectTrigger>
              <SelectContent>
                {phasesForCourseSem.map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Batch */}
          <div className="flex items-center gap-2">
            <span className="w-24 text-right">Batch:</span>
            <Select
              value={batch}
              onValueChange={handleBatchChange}
              disabled={batchesForCourseSemPhase.length === 0}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select batch" />
              </SelectTrigger>
              <SelectContent>
                {batchesForCourseSemPhase.map((b) => (
                  <SelectItem key={b.id} value={b.id}>
                    {b.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
